import { useEffect, useContext, useRef } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import Footer from "../components/Footer";
import useUser from "../hooks/useUser";
import { useParams, useNavigate } from "react-router-dom";
import useGetFiles from "../hooks/useGetFiles";
import { GlobalContext } from "../contexts/GlobalContext";

export default function FilesNonAuth() {
  const { setExpire, addFiles, clearFiles } = useContext(GlobalContext);
  
  const { pin } = useParams();
  const navigate = useNavigate();
  const savedUser = useUser();
  const { user } = useGetFiles(pin);
  
  const handleChange = useRef((data) => {
    setExpire(data.expire);
    if(data.files) {
      addFiles(data.files);
    }
  })
  
  const clearFilesRef = useRef(() => {
    clearFiles()
  })
  
  useEffect(() => {
    document.title = "Files | joShare - File Sharing";
  }, [])
  
  useEffect(() => {
    if(pin.length > 8 || pin.length < 8 || isNaN(pin)){
      navigate("/notfound");
    }
    if(savedUser.pin === pin){
      navigate("/myfiles");
    }
  }, [pin, savedUser, navigate])
  
  useEffect(() => {
    if(user.success === false) {
      navigate("/notfound");
    }
    
    const cleanup = clearFilesRef.current;
    return cleanup;
  }, [user, navigate])
  
  useEffect(() => {
    handleChange.current(user)
  }, [user])
  
  return (
    <>
      <Header />
      <PinHolder pin={pin} />
      <Files auth={false} />
      <Footer />
    </>
    )
}