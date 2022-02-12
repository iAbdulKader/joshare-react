import { useEffect } from "react";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import Footer from "../components/Footer";
import useUser from "../hooks/useUser";
import { useParams, useNavigate } from "react-router-dom";
import useGetFiles from "../hooks/useGetFiles";

export default function FilesNonAuth() {
  const { pin } = useParams();
  const navigate = useNavigate();
  const savedUser = useUser();
  const { user } = useGetFiles(pin);
  
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
  }, [user, navigate])
  
  return (
    <>
      <Header expire={user.expire} />
      <PinHolder pin={pin} />
      <Files auth={false} />
      <Footer />
    </>
    )
}