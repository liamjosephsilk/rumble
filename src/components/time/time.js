import React from "react"
import TimeStyles from "./time.module.css"

const Time = ({ hours = "00", minutes = "00", seconds = "00" }) => {
  return (
    <>
      <span className={TimeStyles.time}>{hours}:</span>
      <span className={TimeStyles.time}>{minutes}:</span>
      <span className={TimeStyles.time}>{seconds}</span>
    </>
  )
}

export default Time
