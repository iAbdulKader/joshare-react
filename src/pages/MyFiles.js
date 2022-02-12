import { useEffect } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import UtilityPalette from "../components/UtilityPalette";
import Upload from "../components/Upload";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

export default function MyFiles(){
  const { pin, expire } = useAuth();
  
  useEffect(() => {
    document.title = "My Files | joShare - File Sharing"
  }, [])
  
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