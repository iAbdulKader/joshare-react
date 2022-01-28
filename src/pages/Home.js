import Logo from "../components/Logo";
import HomeForm from "../components/HomeForm";

export default function Home(){
  
  return (
    <div style={{marginBottom: "100px"}}>
      <div className="logoContainer">
        <Logo fontSize="1.75rem" />
      </div>
      <div className="horizontal_center">
        <HomeForm />
      </div>
    </div>
    );
}