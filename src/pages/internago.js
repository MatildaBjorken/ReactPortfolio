import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from "../components/header"
import Mobile from "../images/internago/mobile.png"
import Blog from "../images/internago/blog.png"
import Blog2 from "../images/internago/blog2.png"

import Another from "../images/internago/another.png"
import Another2 from "../images/internago/another2.png"

import Section1 from "../images/internago/section1.png"
import Section2 from "../images/internago/section2.png"
import Internago from "../images/internago/internago.png"
import Figma from "../images/internago/figma.png"

const PageOne = () => (
  <div className="illustrations">
    <Header />

    <div className="illustrations-text">
      <div>
        <h3>Project Desctiption</h3>
        <br></br>
        <p>
          Re-design, re-structure and re-build of Internagos existing website
          with the main focus of making the company feel more approachable to
          their visitors.
        </p>
      </div>

      <div>
        <h3>What was used?</h3>
        <br></br>
        <p>
          Gatsby with Gatsby-Starter-Blog-Template
          <br></br>
          React
          <br></br>
          Netlify CMS
          <br></br>
          Responsive Design
          <br></br>
          UX/UI
        </p>
      </div>
    </div>
    <div className="link-git">
      <a
        className="link-a"
        href="https://inspiring-heyrovsky-bd5ba4.netlify.app/ "
      >
        link to the current website
      </a>
    </div>

    <div className="internago">
      <img className="" src={Internago} />
    </div>
    <div className="internago-one figma">
      <img src={Figma} />
    </div>

    <div className="internago-illustrations">
      <img className="" src={Section2} />
      <img className="" src={Section1} />
    </div>

    <div className="internago-illustrations">
      <img className="" src={Another} />
      <img className="" src={Another2} />
    </div>

    <div className="internago-illustrations">
      <img className="" src={Blog} />
      <img className="" src={Blog2} />
    </div>

    <div className="illustrations-last img">
      <img src={Mobile} />
    </div>

    <div className="header-center">
      <div className="last-about">
        <Link to="/about">About/Contact</Link>
      </div>

      <div className="next">
        <nav>
          <Link to="/project">Next</Link>
        </nav>
      </div>
    </div>
  </div>
)

export default PageOne
