import React from "react"

const Pause = props => {
  const { handleClick } = props

  return (
    <button className="player__button" onClick={() => handleClick()}>
      Pause
    </button>
  )
}

export default Pause
