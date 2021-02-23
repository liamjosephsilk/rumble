import React from "react"
import { useMediaContext } from "../../context/media/mediaProvider"
import Time from "./time"

const TimeContainer = () => {
  const { currentTime, duration } = useMediaContext()
  if (currentTime && duration !== null)
    return (
      <div>
        <Time
          hours={currentTime.hours}
          minutes={currentTime.minutes}
          seconds={currentTime.seconds}
        />
        <span>|</span>
        <Time
          hours={duration.hours}
          minutes={duration.minutes}
          seconds={duration.seconds}
        />
      </div>
    )
  return (
    <div>
      <Time />
      <span>|</span>
      <Time />
    </div>
  )
}

export default TimeContainer
