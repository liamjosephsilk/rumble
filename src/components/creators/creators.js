import React from "react"
import Img from "gatsby-image"

import creatorsStyle from "./creators.module.css"

const Creators = props => {
  const { name, image, description } = props
  return (
    <div className={creatorsStyle.container}>
      <div className={creatorsStyle.image_container}>
        <Img fluid={image} width="200px" height="200px" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Creators
