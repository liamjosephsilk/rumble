import React from "react"

import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <h2>Footer</h2>© {new Date().getFullYear()}, Built with
        {``}
        <a href="https://www.gatsbyjs.org">Gatsby</a>by
        <a href="/">LJS</a>
      </div>
    </div>
  )
}

export default Footer
