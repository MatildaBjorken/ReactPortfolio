import React, { useEffect } from "react"
import { Link } from "gatsby"
import Mobile from "../images/internago/mobile.png"
import Section1 from "../images/internago/computer-phones.png"
import Section2 from "../images/internago/ipads.png"
import Internago from "../images/internago/computers.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Internago" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Desctiption</h3>
            <br></br>
            <p>
              Re-design, re-structure and re-build of Internagos existing
              website with the main focus of making the company feel more
              approachable to their visitors.
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

        <div className="internago-illustrations">
          <img className="" src={Mobile} data-aos="fade-up" />
          <img className="" src={Section1} data-aos="fade-up" />
        </div>

        <div className="illustrations-last img">
          <img src={Section2} data-aos="fade-up" />
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
    </Layout>
  )
}

export default PageOne
