import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import First from "../images/plantbud/phones.png"
import About from "../images/plantbud/ipad.png"
import Shop from "../images/plantbud/computer.png"
import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Plantbud" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Desctiption</h3>
            <br></br>
            <p>
              This project was a 36 hour sprint where I interpreted one of my
              classmate's ’dream companies’ and visualised it with code and
              graphic design.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p>
              HTML
              <br></br>
              SASS
              <br></br>
              JavaScript
            </p>
          </div>
        </div>

        <div className="link-git" data-aos="fade-up">
          <a
            className="link-a"
            href="https://matildabjorken.github.io/plantBud/"
            z
          >
            link to the current website
          </a>
        </div>

        <div className="internago">
          <img className="" src={First} data-aos="fade-up" />
        </div>

        <div className="illustrations-images ">
          <img className="" src={About} data-aos="fade-up" />
          <img className="" src={Shop} data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/atelier">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
