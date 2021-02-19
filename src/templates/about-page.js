import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Creators from "../components/creators/creators"

const AboutPage = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div>About Page</div>
      {allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <Creators
            name={node.frontmatter.name}
            image={node.frontmatter.profilePicture.childImageSharp.fluid}
            description={node.frontmatter.description}
          />
        </div>
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
        description
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
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
