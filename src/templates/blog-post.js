import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import blogStyles from "./blogpost.module.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <section>
        <h1 className={blogStyles.title}>{frontmatter.title}</h1>
        <h2 className={blogStyles.date}>{frontmatter.date}</h2>
        <article
          className={blogStyles.post}
          dangerouslySetInnerHTML={{ __html: html }}
        ></article>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
