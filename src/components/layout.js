import React from "react"
import { Link } from "gatsby"
import Navbar from "./partials/navbar"
import Footer from "./partials/footer"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "3em" }} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
