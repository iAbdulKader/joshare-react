import { useEffect } from "react";
import Layout from "../layout";
import { PageHeader } from "./HowToUse.js"
import SupportForm from "../components/SupportForm";
import SupportInfo from "../components/SupportInfo";

export default function Support() {
  useEffect(() => {
    document.title = "Support | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      <PageHeader text="Support" />
      
      <SupportForm />
      <SupportInfo />
    </Layout>
    )
}