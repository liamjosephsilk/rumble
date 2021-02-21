import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faVolumeMute,
  faVolumeUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import MediaButtonStyles from "./mediaButton.module.css"

const MediaButton = ({ type, handleAction }) => {
  if (type === "play") {
    return (
      <button className={MediaButtonStyles.btn} onClick={handleAction}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
    )
  }

  if (type === "pause") {
    return (
      <button className={MediaButtonStyles.btn} onClick={handleAction}>
        <FontAwesomeIcon icon={faPause} />
      </button>
    )
  }

  if (type === "notmute") {
    return (
      <button className={MediaButtonStyles.btn__nobg} onClick={handleAction}>
        <FontAwesomeIcon icon={faVolumeUp} color="#222222" />
      </button>
    )
  }

  if (type === "muted") {
    return (
      <button className={MediaButtonStyles.btn__nobg} onClick={handleAction}>
        <FontAwesomeIcon icon={faVolumeMute} color="#222222" />
      </button>
    )
  }

  if (type === "close") {
    return (
      <button className={MediaButtonStyles.btn__nobg} onClick={handleAction}>
        <FontAwesomeIcon icon={faTimes} color="#222222" />
      </button>
    )
  }

  return <p>Select a button type</p>
}

export default MediaButton
