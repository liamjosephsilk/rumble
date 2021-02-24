import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import AudioPlaying from "../audioPlaying/audioPlaying"
import { GatsbyImage } from "gatsby-plugin-image"

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
        <div className={playerStyles.imageContainer}>
          <GatsbyImage
            image={data.localImage.childImageSharp.gatsbyImageData}
            alt={data.title}
            width="200px"
            height="200px"
            loading="lazy"
          />
        </div>
      </div>

      <div className={playerStyles.information}>
        <h2 className={playerStyles.title}>{data.title}</h2>
        <p className={playerStyles.summary}>{data.itunes.summary}</p>
      </div>
      <div>
        <button
          className={playerStyles.btn}
          onClick={() => start(data.id)}
          aria-label="Play Episode"
        >
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
