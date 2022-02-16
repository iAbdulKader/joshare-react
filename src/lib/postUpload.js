const postUpload = async (token, id, url, name, ext, size, callback) => {
  try {
    const fileObj = {
      id,
      downloadUrl: url,
      fileName: name,
      extName: ext || "",
      size
    }
  
    let response = await fetch(`${process.env.REACT_APP_SERVER}/api/user/file`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(fileObj)
    })
    
    await response.json();
    callback(fileObj);
  } catch (e) {
    console.log(e.message)
  }
}

export default postUpload;