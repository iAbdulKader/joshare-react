import { useEffect, useContext, useState, useRef } from "react";
import Header from "../../components/Header";
import PinHolder from "../../components/PinHolder";
import Files from "../../components/Files";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";
import useGetFiles from "../../hooks/useGetFiles";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function FilesNonAuth() {
  const { setExpire, addFiles, clearFiles } = useContext(GlobalContext);
  
  const router = useRouter();
  
  const { pin } = router.query;
  const savedUser = useUser();
  const { user } = useGetFiles(pin);
  
  const handleChange = useRef((data) => {
    setExpire(data.expire);
    
    if(data.files) {
      if(data.files.length === 0){
        addFiles("Files Haven’t Been Uploaded Yet.")
      } else {
        addFiles(data.files);
      }
    }
  })
  
  const clearFilesRef = useRef(() => {
    clearFiles()
  })
  
  useEffect(() => {
    if(!router.isReady) return
    if(pin.length > 8 || pin.length < 8 || isNaN(pin)){
      router.push("/notfound");
    }
    if(savedUser.pin === pin){
      router.push("/myfiles");
    }
  }, [pin, savedUser, router.push])
  
  useEffect(() => {
    if(user.success === false) {
      router.push("/notfound");
    }
    
  }, [user, router.push])
  
  useEffect(() => {
    handleChange.current(user)

    const cleanup = clearFilesRef.current;
    return cleanup;
  }, [user])
  
  return (
    <>
      <Meta title="Files | joShare - File Sharing" />
      <Header />
      <PinHolder pin={pin} />
      <Files auth={false} />
      <Footer />
    </>
    )
}