import Footer from "../components/Footer";
import ThemeButton from "../components/ThemeButton";
import { Toaster } from 'react-hot-toast';

export default function Layout({children}) {
  return(
    <>
      {children}
      <Toaster />
      <ThemeButton />
      <Footer />
    </>
    )
}