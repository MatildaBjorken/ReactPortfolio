

import React from "react"

import RightArrow from "../components/arrowRight"

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creative Developer.</span>
            </div>
            <div className="line">
              <span>Matilda Björk</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/about">
              Read More <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner