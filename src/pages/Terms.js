import { useEffect } from "react";
import Layout from "../layout";
import { PageHeader } from "./HowToUse.js";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      <PageHeader text="Terms & Conditions" />
    </Layout>
    )
}