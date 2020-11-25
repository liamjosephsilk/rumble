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
          <li>
            <a
              href="https://gumroad.com/rumblecomics/follow"
              className={headerStyles.shopbuttonmobile}
            >
              Shop
            </a>
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
