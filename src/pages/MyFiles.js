import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";
import UtilityPalette from "../components/UtilityPalette";
import Upload from "../components/Upload";
import Layout from "../layout";

export default function MyFiles(){
  return (
    <Layout>
      <Header />
      <PinHolder />
      <Files />
      <UtilityPalette />
      <Upload />
    </Layout>
    )
}