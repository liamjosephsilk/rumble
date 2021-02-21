/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { MediaProvider } from "./src/context/media/mediaProvider"
import MediaPlayer from "./src/components/mediaPlayer/mediaPlayer"

export const wrapRootElement = ({ element }) => (
  <MediaProvider>
    {element}
    <MediaPlayer />
  </MediaProvider>
)
