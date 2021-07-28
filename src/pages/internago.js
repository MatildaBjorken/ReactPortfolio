import React, { useEffect } from "react"
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

import Cursor from "../components/dot"

import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="illustrations">
      <Header />
      <Cursor />
      <div className="illustrations-text">
        <div data-aos="fade-up">
          <h3>Project Desctiption</h3>
          <br></br>
          <p>
            Re-design, re-structure and re-build of Internagos existing website
            with the main focus of making the company feel more approachable to
            their visitors.
          </p>
        </div>

        <div data-aos="fade-up">
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
      <div className="link-git" data-aos="fade-up">
        <a className="link-a" href="https://internago.netlify.app/ ">
          link to the current website
        </a>
      </div>

      <div className="internago">
        <img className="" src={Internago} data-aos="fade-up" />
      </div>
      <div className="internago-one figma">
        <img src={Figma} data-aos="fade-up" />
      </div>

      <div className="internago-illustrations">
        <img className="" src={Section2} data-aos="fade-up" />
        <img className="" src={Section1} data-aos="fade-up" />
      </div>

      <div className="internago-illustrations">
        <img className="" src={Blog} data-aos="fade-up" />
        <img className="" src={Blog2} data-aos="fade-up" />
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
}

export default PageOne
