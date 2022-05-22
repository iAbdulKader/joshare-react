import '../styles/global.css';
import NProgress from "nprogress";
import Router from "next/router";
import Footer from "../components/Footer";
import { Toaster } from 'react-hot-toast';
import GlobalProvider from "../contexts/GlobalContext";

function MyApp({ Component, pageProps }) {
  NProgress.configure({
    showSpinner: true
  })
  
  Router.events.on('routeChangeStart', ()=>{
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', ()=>{
    NProgress.done();
  });
  Router.events.on('routeChangeError', ()=>{
    console.log("Error")
  });
  
  return (
    <GlobalProvider>
      <Component {...pageProps} />
      <Toaster />
      <Footer />
    </GlobalProvider>)
}

export default MyApp
