import React, { useState } from "react"
import { Link } from "gatsby"
import Media from "react-media"

import Nav from "./nav"
import MobileNav from "./mobileNav"

import headerStyles from "./header.module.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={headerStyles.container}>
      <Link to="/">
        <div className={headerStyles.flex__item}>
          <p className={headerStyles.title}>comic</p>
          <p className={headerStyles.title}>box</p>
          <p className={headerStyles.title}>rumble</p>
        </div>
      </Link>

      <Media queries={{ mobile: { maxWidth: 600 } }}>
        {matches =>
          matches.mobile ? (
            <button
              className={headerStyles.mobilebutton}
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <span className={headerStyles.mobilebutton__span}></span>
              <span className={headerStyles.mobilebutton__span}></span>
              <span className={headerStyles.mobilebutton__span}></span>
            </button>
          ) : (
            <Nav />
          )
        }
      </Media>

      {isOpen ? (
        <MobileNav isOpen={isOpen} handleClick={() => setIsOpen(false)} />
      ) : (
        <></>
      )}
    </header>
  )
}

export default Header
