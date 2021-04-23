import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"

import Header from "../components/header"
import Mrcool from "../images/nunu.png"
import Clouds from "../images/new-clock.png"
import Cow from "../images/handen.png"
import Internago from "../images/new-internago.png"
import News from "../images/mini-blog.png"
import PlantBud from "../images/budplant.png"
import Magic from "../images/mini-small.png"
import Ricola from "../images/mini-ricola.png"
import CodeGame from "../images/quiz.png"

const IndexPage = () => (
  <div className="home">
    <Header />
    <div className="img-grid">
      <Link to="/clock">
        <div className="img-cloud img-top ">
          <img src={Clouds} alt="pomerado clock" />
          <Link to="/clock" className="img-link">
            TicTac
          </Link>
        </div>
      </Link>

      <Link to="/internago">
        <div className="img-internago img-top img-small">
          <img src={Internago} alt="landing page of internago" />
          <Link to="/internago" className="img-link">
            Internago
          </Link>
        </div>
      </Link>

      <Link to="/project">
        <div className="img-cool img-top img-small">
          <img src={Mrcool} alt="illustration" />
          <Link to="/project" className="img-link">
            Illustrations
          </Link>
        </div>
      </Link>

      <Link to="/news">
        <div className="img-news img-top img-small">
          <img src={News} alt="" />
          <Link to="/news" className="img-link">
            NewsAPI
          </Link>
        </div>
      </Link>

      <Link to="/quiz">
        <div className="img-news img-top img-small">
          <img src={CodeGame} alt="" />
          <Link to="/quiz" className="img-link">
            Quiz !
          </Link>
        </div>
      </Link>

      <Link to="/plantbud">
        <div className="img-plant img-top img-small">
          <img src={PlantBud} alt="" />
          <Link to="/plantbud" className="img-link">
            PlantBud
          </Link>
        </div>
      </Link>

      <Link to="/ricola">
        <div className="img-magic img-top img-small">
          <img src={Ricola} alt="" />
          <Link to="/ricola" className="img-link">
            Ricola
          </Link>
        </div>
      </Link>

      <Link to="/mini">
        <div className="img-magic img-top img-small">
          <img src={Magic} alt="" />
          <Link to="/mini" className="img-link">
            MiniProjects
          </Link>
        </div>
      </Link>

      <Link to="/illustration">
        <div className="img-api img-top img-last img-small">
          <img src={Cow} alt="" />
          <Link to="/illustration" className="img-link">
            Paintings
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
)

export default IndexPage
