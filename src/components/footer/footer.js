import React from "react"
import { Link } from "gatsby"

import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <section className={footerStyles.container}>
        <div className={footerStyles.info}>
          <Link to="/">
            <div>
              <p className={footerStyles.logo}>comic</p>
              <p className={footerStyles.logo}>box</p>
              <p className={footerStyles.logo}>rumble</p>
            </div>
          </Link>
          <span className={footerStyles.build}>
            © {new Date().getFullYear()}, built with
            {``}
            <a href="https://www.gatsbyjs.org">Gatsby</a>by
            <a href="https://liamsilk.dev/">LJS</a>
          </span>
        </div>
        <nav className={footerStyles.navigation}>
          <h3>Comic Box Rumble</h3>
          <Link to="/about" className={footerStyles.links}>
            About
          </Link>
          <Link to="/blog" className={footerStyles.links}>
            Articles
          </Link>
          <Link to="/" className={footerStyles.links}>
            Episodes
          </Link>
          <Link to="" className={footerStyles.links}>
            Shop
          </Link>
        </nav>
      </section>
    </footer>
  )
}

export default Footer
