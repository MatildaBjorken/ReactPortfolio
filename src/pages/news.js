import React, { useEffect } from "react"
import { Link } from "gatsby"
import News from "../images/news/news-desktop.png"
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
      <Seo title="News" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Description</h3>
            <br></br>
            <p>
              I worked with both the frontend and the backend where I created my
              own REST API that I used to connect the frontend and the backend.
              For the frontend, I created this website where users dynamically
              can add, edit and delete posts!
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p>
              PHP
              <br></br>
              React
              <br></br>
              Datagrip
            </p>
          </div>
        </div>

        <div className="link-git" data-aos="fade-up">
          <a
            className="link-a"
            href="https://github.com/MatildaBjorken/finalFrontend"
          >
            link to the source code (frontend)
          </a>
          <br></br> <br></br>
          <a
            className="link-a"
            href="https://github.com/MatildaBjorken/CMSbackend"
          >
            link to the source code (backend)
          </a>
        </div>

        <div className="internago">
          <img className="" src={News} data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/ruth">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
