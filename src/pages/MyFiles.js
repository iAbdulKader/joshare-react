import { useEffect } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import UtilityPalette from "../components/UtilityPalette";
import Upload from "../components/Upload";
import Footer from "../components/Footer";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function MyFiles(){
  const navigate = useNavigate()
  const { pin, expire } = useUser();
   
  useEffect(() => {
    document.title = "My Files | joShare - File Sharing";
    
    if(!pin){
       navigate("/")
    }
  }, [pin])
  
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