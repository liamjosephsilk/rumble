/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MediaProvider } from "../context/media/mediaProvider"
import MediaPlayer from "./mediaPlayer/mediaPlayer"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
