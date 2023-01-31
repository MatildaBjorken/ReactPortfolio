import React from "react"
import { Link } from "gatsby"
import "./navigation.css"

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              
              <li>
                <Link to='/websites' >
                  Websites
                </Link>
              </li>
              <li>
                <Link to='/soon' >
                  Commercial
                </Link>
              </li>
              <li>
                <Link to='/about' >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Get in contact </li>
                <li>
                  <Link
                    to="#"
                    href="https://www.instagram.com/igor_dumencic/"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    href="https://www.instagram.com/igor_dumencic/"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>Sweden, Stockholm</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+46 70 982 98 30</li>
              </ul>
           
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation