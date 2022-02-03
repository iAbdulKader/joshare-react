import { useEffect } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import Footer from "../components/Footer";

export default function FilesNonAuth() {
  useEffect(() => {
    document.title = "Files | joShare - File Sharing"
  }, [])
  
  return (
    <>
      <Header />
      <PinHolder />
      <Files auth={false} />
      <Footer />
    </>
    )
}