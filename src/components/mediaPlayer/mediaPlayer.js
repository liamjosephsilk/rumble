import React, { useRef, useState } from "react"

import MediaPlayerStyles from "./media.module.css"
import MediaButton from "../mediaButton/mediaButton"
import Time from "../time/time"
import { useMediaContext } from "../../context/media/mediaProvider"

const MediaPlayer = () => {
  const { media, open } = useMediaContext()
  const [isPLaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)
  const [muted, setMuted] = useState(false)
  let interval = null

  const audio = useRef()
  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8)

    return {
      hours: result.substr(0, 2),
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    }
  }

  function mute() {
    setMuted(true)
    audio.current.muted = true
  }

  function unMute() {
    setMuted(false)
    audio.current.muted = false
  }

  function play() {
    audio.current.play()
    setIsPlaying(true)
  }

  function pause() {
    audio.current.pause()
    setIsPlaying(false)
    clearInterval(interval)
  }

  function autoPlay(duration) {
    setDuration(formatTime(duration))
    setIsPlaying(true)
    audio.current.play()
    interval = setInterval(() => {
      setCurrentTime(formatTime(audio.current.currentTime))
    }, 1000)

    if ((audio.current.muted = true)) {
      audio.current.muted = false
      setMuted(false)
    }
  }

  if (media === null) {
    return null
  }
  if (media !== null && open === true) {
    return (
      <div className={MediaPlayerStyles.mediaplayer}>
        <div className={MediaPlayerStyles.info}>
          <audio
            src={media.enclosure.url}
            ref={audio}
            onCanPlayThrough={() => autoPlay(audio.current.duration)}
          ></audio>

          <div className={MediaPlayerStyles.title}>
            <p>{media.title}</p>
          </div>

          {isPLaying ? (
            <MediaButton type="pause" handleAction={() => pause()} />
          ) : (
            <MediaButton type="play" handleAction={() => play()} />
          )}
          {duration && currentTime ? (
            <div className={MediaPlayerStyles.time}>
              <div>
                <Time
                  hours={currentTime.hours}
                  minutes={currentTime.minutes}
                  seconds={currentTime.seconds}
                />
                <span className={MediaPlayerStyles.divider}>|</span>
                <Time
                  hours={duration.hours}
                  minutes={duration.minutes}
                  seconds={duration.seconds}
                />
              </div>
              <div className={MediaPlayerStyles.sidebar}>
                {muted ? (
                  <MediaButton type="muted" handleAction={() => unMute()} />
                ) : (
                  <MediaButton type="notmute" handleAction={() => mute()} />
                )}
              </div>
            </div>
          ) : (
            <div className={MediaPlayerStyles.time}>
              <div>
                <Time />
                <span className={MediaPlayerStyles.divider}>|</span>
                <Time />
              </div>
              <div className={MediaPlayerStyles.sidebar}>
                {muted ? (
                  <MediaButton type="muted" handleAction={() => unMute()} />
                ) : (
                  <MediaButton type="notmute" handleAction={() => mute()} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default MediaPlayer
