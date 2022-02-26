import '../styles/global.css';
import ThemeButton from "../components/ThemeButton";
import { Toaster } from 'react-hot-toast';
import GlobalProvider from "../contexts/GlobalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
      <Toaster />
      <ThemeButton />
    </GlobalProvider>)
}

export default MyApp
