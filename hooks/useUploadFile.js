import { useContext } from "react";
import cookie from "js-cookie";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { storage } from "../lib/upload/firebase";
import useUser from "./useUser";
import postUpload from "../lib/postUpload";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useUploadFile(file) {
  const { changeStatus, deleteStatus, addFile } = useContext(GlobalContext);
  
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
          
      }, error => {
        toast.error("Upload Fail")
        console.log(error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
 
          postUpload(token, fileObj.id, url, fileObj.file.name, fileObj.ext[1], fileObj.size, (file) => {
            toast.success("Upload Successful");
            addFile(file);
            setTimeout(function() {
              deleteStatus(fileObj.id)
            }, 1000);
          }, (fileObj) => {
            toast.erorr("Upload Failed. Try Again");
            setTimeout(function() {
              deleteStatus(fileObj.id)
            }, 1000);
          });
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
