import React from "react"
import AudioPlayingStyles from "./audioPlaying.module.css"
import cx from "classnames"

const AudioPlaying = ({ bars = 3 }) => {
  const arr = [...Array(bars).keys()]
  return (
    <div className={AudioPlayingStyles.playing}>
      {arr.map(index => (
        <span
          key={index}
          className={cx(
            AudioPlayingStyles.playingBar,
            AudioPlayingStyles[`bar${index}`]
          )}
        ></span>
      ))}
    </div>
  )
}

export default AudioPlaying
