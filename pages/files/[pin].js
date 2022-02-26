import { useEffect, useContext, useState, useRef } from "react";
import * as cookieParser from 'cookie';
import jwtDecode from "jwt-decode";
import Header from "../../components/Header";
import PinHolder from "../../components/PinHolder";
import Files from "../../components/Files";
import Footer from "../../components/Footer";
import Meta from "../../components/Meta";
import { useRouter } from "next/router";
import useGetFiles from "../../hooks/useGetFiles";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function FilesNonAuth() {
  const router = useRouter();
  const { setExpire, addFiles, clearFiles } = useContext(GlobalContext);
  
  const { pin } = router.query;
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
    if(user.success === false) {
      router.push("/notfound");
    }
    
  }, [user, router])
  
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

export const getServerSideProps = async (ctx) => {
    
    const pin = ctx.params.pin;
    const {token} = cookieParser.parse(ctx.req.headers.cookie || "")
    
    if(token){
      let decodedToken = jwtDecode(token);
      if(decodedToken.pin && decodedToken.expire && (decodedToken.pin === pin)){
          return {
            redirect: {
              permanent: false,
              destination: "/myfiles"
            }
          }
      } 
    }
    if(pin.length > 8 || pin.length < 8 || isNaN(pin)){
        return {
          redirect: {
            permanent: false,
            destination: "/notfound"
          }
        }
    }
    return {
        props: {}
     }
}
