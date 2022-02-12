import useSignUp from "../hooks/useSignUp";

export default function UploadButton() {
  const signup = useSignUp();
  
  return (
    <div 
      onClick={signup}
      className="center nonAuthButton"
    >
      Upload Files
    </div>
    )
}