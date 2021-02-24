import React, { useContext, createContext, useState } from "react"

const MediaContext = createContext({
  ref: "",
  setRef: () => {},
  media: {},
  setMedia: () => {},
  open: false,
  setOpen: () => {},
  duration: null,
  setDuration: () => {},
  currentTime: null,
  setCurrentTime: () => {},
})

const useMediaContext = () => {
  const context = useContext(MediaContext)
  return context
}

const MediaProvider = ({ children }) => {
  const [ref, setRef] = useState()
  const [media, setMedia] = useState(null)
  const [open, setOpen] = useState(false)
  const [duration, setDuration] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)

  return (
    <MediaContext.Provider
      value={{
        ref,
        setRef,
        media,
        setMedia,
        open,
        setOpen,
        duration,
        setDuration,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export { MediaProvider, useMediaContext }
