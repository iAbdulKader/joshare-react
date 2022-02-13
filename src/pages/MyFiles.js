import { useEffect, useContext, useCallback } from "react";
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
   
  const test = useCallback((time) => {
    setAddTimeNum(time)
  }, [])
  useEffect(() => {
    document.title = "My Files | joShare - File Sharing";
    
    if(!pin){
       navigate("/")
    }
  }, [pin, navigate])
  
  useEffect(() => {
    console.log("myfiles", user)
   // setAddTimeNum(user.addTimeNum)
    test(user.addTimeNum)
  }, [user, test])
  
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