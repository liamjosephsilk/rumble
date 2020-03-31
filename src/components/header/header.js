import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.container}>
    <Link to="/">
      <div className={headerStyles.flex__item}>
        <p className={headerStyles.title}>comic</p>
        <p className={headerStyles.title}>box</p>
        <p className={headerStyles.title}>rumble</p>
      </div>
    </Link>

    <nav className={(headerStyles.flex__item, headerStyles.nav)}>
      <ul>
        <li>
          <Link to="/about" activeClassName={headerStyles.active}>
            About
          </Link>
        </li>
        <span>/ </span>
        <li>
          <Link to="/" activeClassName={headerStyles.active}>
            Episodes
          </Link>
        </li>
        <span>/ </span>
        <li>
          <Link to="/blog" activeClassName={headerStyles.active}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
