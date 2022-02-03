import { useEffect } from "react";
import Layout from "../layout";

export default function About() {
  useEffect(() => {
    document.title = "About | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      About
    </Layout>
    )
}