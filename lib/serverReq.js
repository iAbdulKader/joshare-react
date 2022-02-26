export default async function serverReq(path, method, token, data) {
  try {
    let response = await fetch(`${process.env.REACT_APP_SERVER}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    })
    
    let jsonData = await response.json();
    
    return jsonData;
  } catch (e) {
    return e.message
  }
}