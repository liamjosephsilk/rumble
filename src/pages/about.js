import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query Blog {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <p>Welcome to page 2</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h1>{node.frontmatter.title}</h1>
          <h2>{node.frontmatter.description}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
        </div>
      ))}
    </Layout>
  )
}

export default About
