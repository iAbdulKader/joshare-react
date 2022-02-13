import { useEffect, useContext } from "react";
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
  const { setAddTimeNum } = useContext(GlobalContext);
  
  const {user} = useGetFiles(pin);
   
  useEffect(() => {
    document.title = "My Files | joShare - File Sharing";
    
    if(!pin){
       navigate("/")
    }
  }, [pin, navigate])
  
  useEffect(() => {
    console.log(user)
    setAddTimeNum(user.timeChangeNum)
  }, [user])
  
  return (
    <>
      <Header expire={expire} />
      <PinHolder pin={pin} />
      <Files />
      <UtilityPalette />
      <Upload />
      <Footer />
    </>
    )
}