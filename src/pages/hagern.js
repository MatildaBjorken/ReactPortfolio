import React, { useEffect } from "react"
import { Link } from "gatsby"
import Hagern from "../images/hagern/hagern-tablets-phones.png"
import ScreenTablet2 from "../images/hagern/hagern-phone-screen.png"
import Screen from "../images/hagern/hagern-screen.png"
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
      <Seo title="Hagern" />
      <div className="home"></div>
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Description</h3>
            <br></br>
            <p>
              I created a new site for the client from scratch with new content
              and a new booking system.
            </p>
          </div>

          <div data-aos="fade-up">
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

        <div className="link-git" data-aos="fade-up">
          <a className="link-a" href="https://matildabjorken.github.io/clock/ ">
            link to the old website
          </a>
          <br></br>
          <br></br>
          <a className="link-a" href="https://tictack.netlify.app/">
            link to the new website
          </a>
        </div>

        <div className="internago">
          <img src={Hagern} alt="the game" data-aos="fade-up" />
        </div>

        <div className="illustrations-images illustrations-last-two">
          <img className="" src={ScreenTablet2} data-aos="fade-up" />
          <img className="" src={Screen} data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/news">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
