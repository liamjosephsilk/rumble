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
      <SEO
        title="Articles"
        description="Comic Box Rumble articles on the latest comic book and pop culture goodness"
      />
      <h1>Articles</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section>
          <h2>
            <Link style={{ color: "inherit" }} to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <h3 style={{ fontSize: "0.8rem", color: "#999999" }}>
            {node.frontmatter.date}
          </h3>
        </section>
      ))}
    </Layout>
  )
}

export default Blog
