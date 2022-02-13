import Home from "./pages/Home";
import MyFiles from "./pages/MyFiles";
import FilesNonAuth from "./pages/FilesNonAuth";
import About from "./pages/About";
import Terms from "./pages/Terms";
import HowToUse from "./pages/HowToUse";
import Support from "./pages/Support";
import GlobalProvider from "./contexts/GlobalContext";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import ThemeButton from "./components/ThemeButton";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myfiles" element={<MyFiles />} />
          <Route path="files/:pin" element={<FilesNonAuth />} />
          <Route path="about" element={<About />} />
          <Route path="terms" element={<Terms />} />
          <Route path="howtouse" element={<HowToUse />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Toaster />
        <ThemeButton />
    </GlobalProvider>
  );
}

export default App;
