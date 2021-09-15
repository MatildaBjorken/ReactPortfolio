import React, { useEffect } from "react"
import { Link } from "gatsby"
import Mrcool from "../images/main/nunu.png"
import Clouds from "../images/main/clock.png"
import Cow from "../images/main/rocket.png"
import Internago from "../images/main/mobile.png"
import News from "../images/mini-blog.png"
import PlantBud from "../images/budplant.png"
import Magic from "../images/main/mini-projects.png"
import Ricola from "../images/main/filippa.png"
import CodeGame from "../images/main/computers.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Aos from "aos"
import "aos/dist/aos.css"

const IndexPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Home" />
      <div className="home">
        <div className="img-grid">
          <Link to="/quiz">
            <div className="img-internago img-top " data-aos="fade-up">
              <img src={CodeGame} alt="" />
              <Link to="/quiz" className="img-link">
                NewsPaper
              </Link>
            </div>
          </Link>

          <Link to="/internago">
            <div className="img-internago img-top img-small" data-aos="fade-up">
              <img src={Internago} alt="landing page of internago" />
              <Link to="/internago" className="img-link">
                Internago
              </Link>
            </div>
          </Link>

          <Link to="/plantbud">
            <div className="img-plant img-top img-small" data-aos="fade-up">
              <img src={PlantBud} alt="" />
              <Link to="/plantbud" className="img-link">
                PlantBud
              </Link>
            </div>
          </Link>

          <Link to="/clock">
            <div className="img-cloud img-top img-small" data-aos="fade-up">
              <img src={Clouds} alt="pomerado clock" />
              <Link to="/clock" className="img-link">
                TicTac
              </Link>
            </div>
          </Link>

          <Link to="/news">
            <div className="img-news img-top img-small" data-aos="fade-up">
              <img src={News} alt="" />
              <Link to="/news" className="img-link">
                NewsAPI
              </Link>
            </div>
          </Link>

          <Link to="/mini">
            <div className="img-magic img-top img-small" data-aos="fade-up">
              <img src={Magic} alt="" />
              <Link to="/mini" className="img-link">
                MiniProjects
              </Link>
            </div>
          </Link>

          <Link to="/illustration">
            <div
              className="img-api img-top img-last img-small"
              data-aos="fade-up"
            >
              <img src={Cow} alt="" />
              <Link to="/illustration" className="img-link">
                Paintings
              </Link>
            </div>
          </Link>

          <Link to="/ricola">
            <div className="img-magic img-top img-small" data-aos="fade-up">
              <img src={Ricola} alt="" />
              <Link to="/atelier" className="img-link">
                Atelier
              </Link>
            </div>
          </Link>

          <Link to="/project">
            <div className="img-cool img-top img-small" data-aos="fade-up">
              <img src={Mrcool} alt="illustration" />
              <Link to="/project" className="img-link">
                Illustrations
              </Link>
            </div>
          </Link>
        </div>
        <div className="header-nav-small">
          <nav>
            <Link to="/about">About/Contact</Link>
          </nav>
        </div>
      </div>
      <footer>
        <div className="header-center">
          <div className="next">
            <Link to="/about">About/Contact</Link>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
