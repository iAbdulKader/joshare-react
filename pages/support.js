import Header from "../components/Header"
import { PageHeader } from "./howtouse.js"
import Meta from "../components/Meta";
import SupportForm from "../components/SupportForm";
import SupportInfo from "../components/SupportInfo";

export default function Support() {
  
  return (
    <>
      <Header showUpload={true} />
      <Meta title="Support | joShare - File Sharing" />
    
      <PageHeader text="Support" />
      
      <SupportForm />
      <SupportInfo />
    </>
    )
}