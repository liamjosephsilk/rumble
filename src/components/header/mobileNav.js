import React from "react"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"

const MobileNav = props => {
  const { handleClick } = props
  return (
    <>
      <nav className={headerStyles.mobilenav}>
        <ul>
          <li>
            <Link to="/about" activeClassName={headerStyles.active}>
              About
            </Link>
          </li>

          <li>
            <Link to="/blog" activeClassName={headerStyles.active}>
              Articles
            </Link>
          </li>

          <li>
            <Link to="/" activeClassName={headerStyles.active}>
              Episodes
            </Link>
          </li>
        </ul>
        <button
          className={headerStyles.buttonclose}
          onClick={() => handleClick()}
        >
          <span className={headerStyles.buttonclose__span}></span>
          <span className={headerStyles.buttonclose__span}></span>
        </button>
      </nav>
    </>
  )
}

export default MobileNav
