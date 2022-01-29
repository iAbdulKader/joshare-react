import Logo from "../components/Logo";
import HomeForm from "../components/HomeForm";
import Layout from "../layout";

export default function Home(){
  
  return (
    <Layout>
      <div style={{marginBottom: "100px"}}>
        <div className="logoContainer">
          <Logo fontSize="1.75rem" />
        </div>
        <div className="horizontal_center">
          <HomeForm />
        </div>
      </div>
    </Layout>
    );
}