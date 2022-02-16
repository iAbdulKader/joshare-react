import serverReq from "../lib/serverReq";

export default async function getUserByPin(pin) {
  const userData = await serverReq(`/api/files/${pin}`, "GET");
  
  if(userData.success === false) {
    return false;
  } else {
    return true
  }
}