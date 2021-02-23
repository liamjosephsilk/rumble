import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import AudioPlaying from "../audioPlaying/audioPlaying"

import playerStyles from "./player.module.css"

import { useMediaContext } from "../../context/media/mediaProvider"

const Player = props => {
  const { data } = props
  const { setRef, ref, setMedia, setOpen } = useMediaContext()

  function start(id) {
    setRef(id)
    setMedia(data)
    setOpen(true)
  }

  return (
    <div className={playerStyles.container}>
      <div className={playerStyles.player}>
        <div>
          <img
            src={data.itunes.image}
            className={playerStyles.image}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className={playerStyles.information}>
        <h2 className={playerStyles.title}>{data.title}</h2>
        <p className={playerStyles.summary}>{data.itunes.summary}</p>
      </div>
      <div>
        <button className={playerStyles.btn} onClick={() => start(data.id)}>
          {data.id === ref ? (
            <AudioPlaying />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      </div>
    </div>
  )
}

export default Player
