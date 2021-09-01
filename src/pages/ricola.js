import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RicolaMain from "../images/ricola/desktop-main.png"
import Main from "../images/ricola/tilted-info.png"
import Sidebar from "../images/ricola/tilted-sidebar.png"
import Info from "../images/ricola/ricola-desktop-double.png"
import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Ricola" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Desctiption</h3>
            <br></br>
            <p>
              A project between UX and Frontend students at Hyper Island where
              we developed a part of a website for Ricola that highlights their
              ecological footsteps and how they are sustainable.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p>
              Gatsby
              <br></br>
              Illustrator
              <br></br>
              Figma
            </p>
          </div>
        </div>

        <div className="internago">
          <img src={RicolaMain} alt="the game" data-aos="fade-up" />
        </div>

        <div className="illustrations-images ">
          <img src={Main} alt="the game starts" data-aos="fade-up" />
          <img src={Sidebar} alt="the highscores" data-aos="fade-up" />
        </div>

        <div className="illustrations-last-one">
          <img src={Info} />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/news">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/mini">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
