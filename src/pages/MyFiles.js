import { useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import UtilityPalette from "../components/UtilityPalette";
import Upload from "../components/Upload";
import Footer from "../components/Footer";
import useUser from "../hooks/useUser";
import useGetFiles from "../hooks/useGetFiles";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function MyFiles(){
  const navigate = useNavigate()
  const { pin, expire } = useUser();
  const { addFiles, clearFiles, setAddTimeNum, setEmailSendNum, setExpire } = useContext(GlobalContext);
  
  const { user } = useGetFiles(pin);
   
  const handleChange = useRef((data) => {
    setAddTimeNum(true, data.addTimeNum);
    setEmailSendNum(true, data.emailSendNum);
    if(data.files) {
      addFiles(data.files)
    }
    setExpire(expire);
  })
  
  const clearFilesRef = useRef(() => {
    clearFiles()
  })
  
  useEffect(() => {
    document.title = "My Files | joShare - File Sharing";
    
    if(!pin){
       navigate("/")
    }
  }, [pin, navigate])
  
  useEffect(() => {
    handleChange.current(user)
    
    const cleanup = clearFilesRef.current;
    return cleanup;
  }, [user])
  
  return (
    <>
      <Header />
      <PinHolder pin={pin} />
      <Files />
      <UtilityPalette />
      <Upload />
      <Footer />
    </>
    )
}