import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <p>Welcome to page 2</p>
    </Layout>
  )
}

export default About
