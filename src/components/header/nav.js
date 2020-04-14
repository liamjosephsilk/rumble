import React from "react"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <>
      <nav className={(headerStyles.flex__item, headerStyles.nav)}>
        <ul>
          <li>
            <Link to="/about" activeClassName={headerStyles.active}>
              About
            </Link>
          </li>
          <span>/ </span>
          <li>
            <Link to="/blog" activeClassName={headerStyles.active}>
              Articles
            </Link>
          </li>
          <span>/ </span>
          <li>
            <Link to="/" activeClassName={headerStyles.active}>
              Episodes
            </Link>
          </li>
          <li>
            <a
              href="https://gumroad.com/rumblecomics/follow"
              className={headerStyles.shopbutton}
            >
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
