import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import creatorsStyle from "./creators.module.css"

const Creators = props => {
  const { name, image, description } = props
  return (
    <div className={creatorsStyle.container}>
      <div className={creatorsStyle.image_container}>
        <GatsbyImage image={image} width="1000px" height="1000px" />
      </div>
      <div className={creatorsStyle.copy}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Creators
