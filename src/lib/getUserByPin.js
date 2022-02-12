export default async function getUserByPin(pin) {
  const response = await fetch(`${process.env.REACT_APP_SERVER}/api/files/${pin}`)
  const userData = await response.json();
  
  if(userData.success === false) {
    return false;
  } else {
    return true
  }
}