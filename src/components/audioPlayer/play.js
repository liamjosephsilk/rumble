import React from "react"

const Play = props => {
  const { handleClick } = props

  return (
    <button className="player__button" onClick={() => handleClick()}>
      Play
    </button>
  )
}

export default Play
