import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from "../components/header"
import Magic from "../images/mini/magic-device.png"
import Cubes from "../images/mini/cubes-device.png"
import Font from "../images/mini/font-device.png"
import Egg from "../images/mini/egg.png"

const PageOne = () => (
  <div className="illustrations">
    <Header />

    <div className="illustrations-text">
      <div>
        <h3>Project Desctiption</h3>
        <br></br>
        <p>Some small projects I have done for myself to learn coding more!</p>
      </div>

      <div>
        <h3>What was used?</h3>
        <br></br>
        <p>
          HTML
          <br></br>
          CSS
          <br></br>
          JavaScript
          <br></br>
          React
          <br></br>
          Three js
          <br></br>
          p5 js
        </p>
      </div>
    </div>

    <div className="link-git">
      <a className="link-a" href="https://matildabjorken.github.io/blob/">
        link to the egg site
      </a>
      <br></br> <br></br>
      <a
        className="link-a"
        href="https://matildabjorken.github.io/business-card/"
      >
        link to the cubes
      </a>
      <br></br> <br></br>
      <a className="link-a" href="https://matildabjorken.github.io/magic8/">
        link to the magic 8 ball
      </a>
      <br></br> <br></br>
      <a className="link-a" href="https://matildabjorken.github.io/fonts/">
        link to the font site
      </a>
    </div>

    <div className="illustrations-images ">
      <img className="" src={Font} />
      <img className="" src={Cubes} />
    </div>

    <div className="illustrations-images illustrations-last-two">
      <img className="" src={Magic} />
      <img src={Egg} />
    </div>

    <div className="header-center">
      <div className="last-about">
        <Link to="/about">About/Contact</Link>
      </div>

      <div className="next">
        <nav>
          <Link to="/illustration">Next</Link>
        </nav>
      </div>
    </div>
  </div>
)

export default PageOne
