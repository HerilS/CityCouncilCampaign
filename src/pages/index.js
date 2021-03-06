import React from "react"
import PanelOne from "../components/home/PanelOne"
import PanelTwo from "../components/home/PanelTwo"
import PanelThree from "../components/home/PanelThree"
import PanelFour from "../components/home/PanelFour"
import PanelFive from "../components/home/PanelFive"
import PanelSix from "../components/home/PanelSix"
import PanelSeven from "../components/home/PanelSeven"
import SEO from "../components/seo"
import Layout from '../components/Layout'
export default function index() {
  return (
    <Layout>
      <SEO title="Homepage" />
      <PanelOne />
      <PanelTwo />
      <PanelThree />
      <PanelFour />
      <PanelFive />
      <PanelSix />
      <PanelSeven />
    </Layout>
      

  )
}
