import { useEffect } from "react";
import Layout from "../layout";

export default function Support() {
  useEffect(() => {
    document.title = "Support | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      Support
    </Layout>
    )
}