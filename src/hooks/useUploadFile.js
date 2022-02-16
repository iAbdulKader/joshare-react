import { useContext } from "react";
import cookie from "js-cookie";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { storage } from "../lib/upload/firebase";
import useUser from "./useUser";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useUploadFile(file) {
  const { changeStatus } = useContext(GlobalContext);
  
  const token = cookie.get("token");
  const { pin } = useUser();
  
  const uploadFile = (fileObj) => {
    if(fileObj.file && token){
      const fileName = fileObj.file.name.replace(fileObj.ext[0] || /[^0-9A-Za-z]/, "")
    
      const storageRef = ref(storage, `${pin}/${fileName}-${fileObj.id}${fileObj.ext[0] || ""}`);
      
      const uploadTask = uploadBytesResumable(storageRef, fileObj.file)
      changeStatus(fileObj.id, "status", "uploading")
      uploadTask.on('state_changed', snapshot=> {
          
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          changeStatus(fileObj.id, "progress", prog)
          console.log(prog)
      }, error => {
        toast.error("Upload Fail")
        console.log(error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          postUpload(token, fileObj.id, url, fileObj.file.name, fileObj.ext[1], fileObj.size, () => {
            console.log("server Successful ")
          });
          console.log("Uploaded", url)
        })
      
    });
    return uploadTask;
    } else {
      console.log("error")
      
    }
    
  }
  
  return {
    uploadFile
  }
}

const postUpload = async (token, id, url, name, ext, size, callback) => {
  try {
    let response = await fetch(`${process.env.REACT_APP_SERVER}/api/user/file`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
        url,
        name,
        ext: ext || "",
        size,
      })
    })
    
    let data = await response.json();
    console.log(data);
    callback();
  } catch (e) {
    console.log(e.message)
  }
  callback()
}