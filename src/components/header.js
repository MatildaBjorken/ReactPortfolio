import { Link } from "gatsby"
import star from "../images/star.svg"
import React from "react"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-center">
          <div className="header-name">
            <Link to="/">Matilda Björk</Link>
          </div>

          <div className="header-nav">
            <nav>
              <img src={star} />
              <Link to="/about">About/Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
