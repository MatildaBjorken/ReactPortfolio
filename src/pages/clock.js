import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from "../components/header"
import Press from "../images/clock/cloud-ipad.png"
import Laptop from "../images/clock/cloud-laptop.png"
import Mobile from "../images/clock/cloud-phone.png"
import NewIpad from "../images/clock/new-ipad.png"
import NewPhone from "../images/clock/new-phone.png"
import NewLaptop from "../images/clock/new-laptop.png"

import Cursor from "../components/dot"

const PageOne = () => (
  <div className="illustrations">
    <Header />
    <Cursor />
    <div className="illustrations-text">
      <div>
        <h3>Project Desctiption</h3>
        <br></br>
        <p>
          The Pomodoro clock with on the left was my first real coding project.
          I focused a lot on the logic in Javascript and to make the result more
          visibly pleasing, I integrated this neumorphism style.
          <br></br> <br></br>The Pomodoro clock on the right was made half a
          year lather using React, Exploring hooks, integrating sound in just the span of one week.
        </p>
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
        </p>
      </div>
    </div>

    <div className="link-git">
      <a className="link-a" href="https://matildabjorken.github.io/clock/ ">
        link to the old website
      </a>
      <br></br>
      <br></br>
      <a className="link-a" href="https://tictack.netlify.app/">
        link to the new website
      </a>
    </div>

    <div className="illustrations-images ">
      <img className="" src={Press} />
      <img className="" src={NewIpad} />
    </div>

    <div className="illustrations-images ">
      <img className="" src={Mobile} />
      <img className="" src={NewPhone} />
    </div>

    <div className="illustrations-images illustrations-last-two">
      <img className="" src={Laptop} />
      <img className="" src={NewLaptop} />
    </div>

    <div className="header-center">
      <div className="last-about">
        <Link to="/about">About/Contact</Link>
      </div>

      <div className="next">
        <nav>
          <Link to="/internago">Next</Link>
        </nav>
      </div>
    </div>
  </div>
)

export default PageOne
