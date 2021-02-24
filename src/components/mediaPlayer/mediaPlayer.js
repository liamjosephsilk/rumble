import React, { useRef, useState } from "react"

import MediaPlayerStyles from "./media.module.css"
import MediaButton from "../mediaButton/mediaButton"
import TimeContainer from "../time/timeContainer"
import PlayerTitle from "../playerTitle/playerTitle"
import { useMediaContext } from "../../context/media/mediaProvider"

const MediaPlayer = () => {
  const { media, setDuration, setCurrentTime } = useMediaContext()
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const audio = useRef()

  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8)

    return {
      hours: result.substr(0, 2),
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    }
  }

  function handleMuted(muteBoolean) {
    setMuted(muteBoolean)
    audio.current.muted = muteBoolean
  }

  function handlePlayback(playback, audio) {
    const current = audio

    if (playback === "pause") {
      current.pause()
      setIsPlaying(false)
    } else {
      current.play()
      setIsPlaying(true)
    }
  }

  function autoPlay(duration) {
    setDuration(formatTime(duration))
    setIsPlaying(true)
    audio.current.play()

    if ((audio.current.muted = true)) {
      audio.current.muted = false
      setMuted(false)
    }
  }

  if (media !== null) {
    return (
      <div className={MediaPlayerStyles.mediaplayer}>
        <div className={MediaPlayerStyles.container}>
          <audio
            src={media.enclosure.url}
            onCanPlayThrough={() => autoPlay(audio.current.duration)}
            ref={audio}
            onTimeUpdate={() =>
              setCurrentTime(formatTime(audio.current.currentTime))
            }
          ></audio>
          <div className={MediaPlayerStyles.info}>
            <PlayerTitle title={media.title} />
          </div>
          <div className={MediaPlayerStyles.actions}>
            {isPlaying ? (
              <MediaButton
                type="pause"
                handleAction={() => handlePlayback("pause", audio.current)}
              />
            ) : (
              <MediaButton
                type="play"
                handleAction={() => handlePlayback("play", audio.current)}
              />
            )}
            <TimeContainer />
            {muted ? (
              <MediaButton
                type="muted"
                handleAction={() => handleMuted(false)}
              />
            ) : (
              <MediaButton
                type="notmute"
                handleAction={() => handleMuted(true)}
              />
            )}
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default MediaPlayer
