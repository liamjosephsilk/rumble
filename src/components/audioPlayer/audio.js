import React from "react"

import Play from "./Play"
import Pause from "./Pause"
import Bar from "./progressBar"

import useAudioPlayer from "./useAudioPlayer"

function Audio(props) {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer()

  return (
    <div className="player">
      <audio className="audio" preload="none" controls>
        <source src="http://feeds.soundcloud.com/stream/558460785-comicboxrumble-e26-cbr-goes-wild.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={time => setClickedTime(time)}
        />
      </div>
    </div>
  )
}

export default Audio
