/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")
// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//   return graphql(`
//     query MyQuery {
//       allMarkdownRemark(sort: { fields: frontmatter___date }) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         context: {
//           id,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node)

//   if (node.internal.type === "MarkdownRemark") {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: "slug",
//       node,
//       value,
//     })
//   }
// }
