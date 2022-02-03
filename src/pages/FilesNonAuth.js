import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import Footer from "../components/Footer";

export default function FilesNonAuth() {
  return (
    <>
      <Header />
      <PinHolder />
      <Files auth={false} />
      <Footer />
    </>
    )
}