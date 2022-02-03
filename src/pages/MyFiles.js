import { useEffect } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import UtilityPalette from "../components/UtilityPalette";
import Upload from "../components/Upload";
import Footer from "../components/Footer";

export default function MyFiles(){
  useEffect(() => {
    document.title = "My Files | joShare - File Sharing"
  }, [])
  
  return (
    <>
      <Header />
      <PinHolder />
      <Files />
      <UtilityPalette />
      <Upload />
      <Footer />
    </>
    )
}