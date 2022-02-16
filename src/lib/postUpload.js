import serverReq from "../lib/serverReq";

const postUpload = async (token, id, url, name, ext, size, callback, errorCallback) => {
  try {
    const fileObj = {
      id,
      downloadUrl: url,
      fileName: name,
      extName: ext || "",
      size
    }
  
    let data = await serverReq("/api/user/file", "POST", token, fileObj)
    
    if(data.success === true) {
      callback(fileObj);
    } else {
      errorCallback(fileObj);
    }
  } catch (e) {
    console.log(e.message)
  }
}

export default postUpload;