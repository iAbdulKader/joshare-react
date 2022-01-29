import Footer from "../components/Footer";
import Header from "../components/Header";
import ThemeButton from "../components/ThemeButton";
import { Toaster } from 'react-hot-toast';

export default function AlternateLayout({children}) {
  return(
    <>
      <Header showUpload={true} />
      {children}
      <Toaster />
      <ThemeButton />
      <Footer />
    </>
    )
}