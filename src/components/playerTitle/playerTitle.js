import React from "react"
import PlayerTitleStyles from "./playerTitle.module.css"

const PlayerTitle = ({ title }) => {
  return <h3 className={PlayerTitleStyles.title}>{title}</h3>
}

export default PlayerTitle
