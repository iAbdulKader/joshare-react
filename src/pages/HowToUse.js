import { useEffect } from "react";
import Layout from "../layout";

export default function HowToUse() {
  useEffect(() => {
    document.title = "How To Use | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      How To Use
    </Layout>
    )
}