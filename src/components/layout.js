import React, { useEffect, useState } from "react"
import { openMenu, closeMenu } from "../components/menuAnimations"
import Cursor from "./dot"
import UpArrow from "../components/arrowUp"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { gsap } from "gsap"
import Navigation from "./navigation"

import "./layout.css"
import "./landingPage.scss"
import "./header.scss"
import "./cases.scss"


function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [dimensions, setDimensions] = useState({})

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } })
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })
  const [menuState, setMenuState] = useState({ menuOpened: false })
  useEffect(() => {
    //Listening for page changes.

    if (menuState.menuOpened === true) {
      openMenu(dimensions.width)
    } else if (menuState.menuOpened === false) {
      closeMenu()
    }
  })
  return (
    <>
      <title>Matilda Björk</title>
      <meta
        name="description"
        content="Matilda Björk, creative developer based in Stockholm, Sweden."
      />
      <Cursor />
      <div className="main-wrap">
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <div className="logo">
              <Link to="/">Matilda Björk</Link>
            </div>
            <div className="nav-toggle">
              <div
                onClick={() => setMenuState({ menuOpened: true })}
                className="hamburger-menu"
              >
                <span></span>
                <span></span>
              </div>
              <div
                className="hamburger-menu-close"
                onClick={() => setMenuState({ menuOpened: false })}
              >
                <UpArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App"></div>
      <Navigation />
      <div className="App">
        {/* <Header /> */}
        {children}
        </div>
      </div>
    </>
  )
}

export default Layout