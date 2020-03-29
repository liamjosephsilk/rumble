import React from "react"
import { useRef, useState, useEffect } from "react"

import playerStyles from "./player.module.css"

import play from "../../images/play.svg"
import pause from "../..//images/pause.svg"

const Player = props => {
  const { data, id } = props
  const audio = useRef()
  const [playing, setPlaying] = useState(false)

  function start() {
    setPlaying(true)
    audio.current.play()
  }

  function stop() {
    setPlaying(false)
    audio.current.pause()
  }

  return (
    <div className={playerStyles.container}>
      <audio
        src={data.enclosure.url}
        data-id={id}
        ref={audio}
        preload="none"
      ></audio>
      <div className={playerStyles.player}>
        <div>
          <img
            src={data.itunes.image}
            className={playerStyles.image}
            alt=""
            loading="lazy"
          />
        </div>
        <div className={playerStyles.buttons}>
          {playing ? (
            <button onClick={stop} className={playerStyles.button}>
              <img src={pause} alt="" />
            </button>
          ) : (
            <button onClick={start} className={playerStyles.button}>
              <img src={play} className={playerStyles.button__image} alt="" />
            </button>
          )}
        </div>
      </div>

      <div className={playerStyles.information}>
        <h2 className={playerStyles.title}>{data.title}</h2>
        <p className={playerStyles.summary}>{data.itunes.summary}</p>
      </div>
    </div>
  )
}

export default Player
