import Layout from "../layout";
import Header from "../components/Header";
import PinHolder from "../components/PinHolder";
import Files from "../components/Files";

export default function FilesNonAuth() {
  return (
    <Layout>
      <Header />
      <PinHolder />
      <Files auth={false} />
    </Layout>
    )
}