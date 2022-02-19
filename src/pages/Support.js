import { useEffect } from "react";
import Layout from "../layout";
import { PageHeader } from "./HowToUse.js"

export default function Support() {
  useEffect(() => {
    document.title = "Support | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      <PageHeader text="Support" />
    </Layout>
    )
}