import React from "react"
import { useRef, useState } from "react"

import playerStyles from "./player.module.css"

import { useMediaContext } from "../../context/media/mediaProvider"

const Player = props => {
  const { data, id } = props
  const { setRef, ref, media, setMedia, setOpen, open } = useMediaContext()

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
        <button onClick={() => start(data.id)}>
          {data.id === ref ? "playing" : "not playing"}
        </button>
      </div>
    </div>
  )
}

export default Player
