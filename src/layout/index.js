import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AlternateLayout({children}) {
  return(
    <>
      <Header showUpload={true} />
        {children}
      <Footer />
    </>
    )
}