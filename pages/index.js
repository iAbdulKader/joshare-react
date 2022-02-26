import Meta from "../components/Meta";
import Logo from "../components/Logo";
import HomeForm from "../components/HomeForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
     <Meta title="Home - joShare | File Sharing With Ease" />
     
     <div style={{marginBottom: "100px"}}>
        <div className="logoContainer">
          <Logo fontSize="1.75rem" />
        </div>
        <div className="horizontal_center">
          <HomeForm />
        </div>
     </div>
      <Footer />
    </>
  )
}
