import React from "react"
import PropTypes from "prop-types"

import SEO from './SEO'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
