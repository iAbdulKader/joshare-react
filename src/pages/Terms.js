import { useEffect } from "react";
import Layout from "../layout";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      Terms
    </Layout>
    )
}