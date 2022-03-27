import React, { useEffect } from "react"
import { Link } from "gatsby"
import News from "../images/news/news-desktop.png"
import Screen from "../images/news/news-screen.png"
import TabletPhone from "../images/news/news-phone-tablet.png"
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
              A simple News App with news fetched from New York Times API, where
              you can search for articles and read about the top rated articles.
              I designed and prototyped the app in Figma and then stared to
              develop it in React. Enjoy!
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
          <a className="link-a" href="https://matildabjorken.github.io/news/">
            link to the site
          </a>
        </div>

        <div className="internago">
          <img className="" src={News} data-aos="fade-up" />
        </div>

        <div className="illustrations-images ">
          <img className="" src={Screen} data-aos="fade-up" />
          <img className="" src={TabletPhone} data-aos="fade-up" />
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
