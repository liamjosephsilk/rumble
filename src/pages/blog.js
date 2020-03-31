import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM YYYY")
              templateKey
              title
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h2>
        </div>
      ))}
    </Layout>
  )
}

export default Blog
