import { useContext } from "react";
import cookie from "js-cookie";
import toast from "react-hot-toast";
import { GlobalContext } from "../contexts/GlobalContext";
import serverReq from "../lib/serverReq";

export default function useDeleteFile() {
  const { deleteFile: deleteFileFromContext } = useContext(GlobalContext);
  const token = cookie.get("token");
  
  const deleteFile = async (id) => {
    if(!token) {
      toast.error("Unauthorised")
      return
    }
    try {
      let response = await serverReq(`/api/user/file/${id}`, "DELETE", token);
      
      if(response.success === true) {
        deleteFileFromContext(id);
      } else {
        console.log("Failed Try Again");
      }
    } catch (e) {
      console.log(e.message)
    }
  }
  return deleteFile;
}