import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Player from "../components/player/player"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ComicBoxData {
      allFeedComicBoxRumble {
        edges {
          node {
            title
            id
            pubDate
            itunes {
              summary
            }
            localImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  width: 800
                  layout: CONSTRAINED
                )
              }
            }
            enclosure {
              type
              url
              length
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Episodes" />
      <h1>Episodes</h1>
      {data.allFeedComicBoxRumble.edges.map(({ node }) => (
        <Player data={node} key={node.id} id={node.id} />
      ))}
    </Layout>
  )
}

export default IndexPage
