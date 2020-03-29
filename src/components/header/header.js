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
          <Link to="/page-2">About</Link>
        </li>
        <span>/ </span>
        <li>Episodes</li>
        <span>/ </span>
        <li>Blog</li>
      </ul>
    </nav>
  </header>
)

export default Header
