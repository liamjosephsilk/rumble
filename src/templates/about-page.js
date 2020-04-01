import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const AboutPage = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div>About Page</div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h1>{node.frontmatter.name}</h1>
      ))}
    </Layout>
  )
}

export default AboutPage

export const aboutPageAndCreators = graphql`
  query creatorsAndAboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "creators" } } }) {
      edges {
        node {
          id
          frontmatter {
            name
            description
          }
        }
      }
    }
  }
`
