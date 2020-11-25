import React from "react"
import Img from "gatsby-image"

import creatorsStyle from "./creators.module.css"

const Creators = props => {
  const { name, image } = props
  return (
    <div className={creatorsStyle.container}>
      <div className={creatorsStyle.image_container}>
        <Img fluid={image} width="200px" height="200px" />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default Creators
