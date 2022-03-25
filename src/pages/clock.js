import React, { useEffect } from "react"
import { Link } from "gatsby"
import Phones from "../images/clock/pomodoro-phones.png"
import ScreenTablet2 from "../images/clock/pomodoro-screen-tablet2.png"
import ScreenTablet from "../images/clock/pomodoro-screen-tablet.png"
import NewLaptop from "../images/clock/computer-old.png"
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
      <Seo title="Clock" />
      <div className="home"></div>
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Description</h3>
            <br></br>
            <p>
              The Pomodoro clock with on the left was my first real coding
              project. I focused a lot on the logic in Javascript and to make
              the result more visibly pleasing, I integrated this neumorphism
              style.
              <br></br> <br></br>The Pomodoro clock on the right was made half a
              year lather using React, Exploring hooks, integrating sound in
              just the span of one week.
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
          <img src={Phones} alt="the game" data-aos="fade-up" />
        </div>

        <div className="illustrations-images illustrations-last-two">
          <img className="" src={ScreenTablet} data-aos="fade-up" />
          <img className="" src={ScreenTablet2} data-aos="fade-up" />
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
    </Layout>
  )
}

export default PageOne
