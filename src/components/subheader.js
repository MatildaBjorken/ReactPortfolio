import { Link } from "gatsby"
import React from "react"
import gsap from "gsap"

const SubHeader = () => {
  return (
    <div>
      <div>
        <div className="subheader">
          <h3>I LOVE TO WORK WITH</h3>
        </div>
        <div className="subheader-content">
          <Link to="/soon">
            <p>COMMERCIAL</p>
          </Link>
          <Link to="/soon">
            <p>WEBSITES</p>
          </Link>
          <Link to="/soon">
            <p>MOTION</p>
          </Link>
          <Link to="/soon">
            <p>ILLUSTRATIONS</p>
          </Link>
        </div>

        <div className="header-nav"></div>
      </div>
    </div>
  )
}

export default SubHeader
