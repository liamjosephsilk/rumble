import React, { useContext, createContext, useState } from "react"

const MediaContext = createContext({
  ref: "",
  setRef: () => {},
  media: {},
  setMedia: () => {},
  open: false,
  setOpen: () => {},
})

const useMediaContext = () => {
  const context = useContext(MediaContext)
  return context
}

const MediaProvider = ({ children }) => {
  const [ref, setRef] = useState()
  const [media, setMedia] = useState(null)
  const [open, setOpen] = useState(false)

  return (
    <MediaContext.Provider
      value={{ ref, setRef, media, setMedia, open, setOpen }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export { MediaProvider, useMediaContext }
