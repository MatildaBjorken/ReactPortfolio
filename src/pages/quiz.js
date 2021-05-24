import React, { useEffect } from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from "../components/header"
import CodeGame from "../images/quiz/quiz-phones.png"
import Game from "../images/quiz/large-desktop-one.png"
import HighScores from "../images/quiz/large-desktop-two.png"

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
            A clean quiz game that lets you test your knowledge in computer
            science! The questions are fetched from the open trivia database and
            the scores you get are saved in local storage. Enjoy!
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
            LocalStorage
            <br></br>
            API
          </p>
        </div>
      </div>
      <div className="link-git" data-aos="fade-up">
        <a
          className="link-a"
          href="https://matildabjorken.github.io/code-game/ "
        >
          link to the game
        </a>
      </div>

      <div className="internago">
        <img src={CodeGame} alt="the game" data-aos="fade-up" />
      </div>

      <div className="illustrations-images illustrations-last-two ">
        <img src={Game} alt="the game starts" data-aos="fade-up" />
        <img src={HighScores} alt="the highscores" data-aos="fade-up" />
      </div>

      <div className="header-center">
        <div className="last-about">
          <Link to="/about">About/Contact</Link>
        </div>

        <div className="next">
          <nav>
            <Link to="/plantbud">Next</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default PageOne
