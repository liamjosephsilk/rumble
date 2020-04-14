import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import MobileNav from "./mobileNav"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(undefined)
  const breakpoint = 768

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <header className={headerStyles.container}>
      <Link to="/">
        <div className={headerStyles.flex__item}>
          <p className={headerStyles.title}>comic</p>
          <p className={headerStyles.title}>box</p>
          <p className={headerStyles.title}>rumble</p>
        </div>
      </Link>
      {width < breakpoint ? (
        <button
          className={headerStyles.mobilebutton}
          onClick={() => setIsOpen(true)}
        >
          <span className={headerStyles.mobilebutton__span}></span>
          <span className={headerStyles.mobilebutton__span}></span>
          <span className={headerStyles.mobilebutton__span}></span>
        </button>
      ) : (
        <Nav />
      )}
      {isOpen ? (
        <MobileNav isOpen={isOpen} handleClick={() => setIsOpen(false)} />
      ) : (
        <></>
      )}
    </header>
  )
}

export default Header
