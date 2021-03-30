import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from "../components/header"
import CodeGame from "../images/quiz/quiz-phones.png"
import Game from "../images/quiz/large-desktop-home.png"
import HighScores from "../images/quiz/large-desktop-end.png"
import End from "../images/quiz/end.png"

const PageOne = () => (
  <div className="illustrations">
    <Header />

    <div className="illustrations-text">
      <div>
        <h3>Project Desctiption</h3>
        <br></br>
        <p>
          A clean quiz game that lets you test your knowledge in computer
          science! The questions are fetched from the open trivia database and
          the scores you get are saved in local storage. Enjoy!
        </p>
      </div>

      <div>
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
    <div className="link-git">
      <a className="link-a" href="https://matildabjorken.github.io/code-game/ ">
        link to the game
      </a>
    </div>

    <div className="internago">
      <img className="" src={CodeGame} alt="the game" />
    </div>

    <div className="illustrations-images illustrations-last-two ">
      <img className="" src={Game} alt="the game starts" />
      <img className="" src={HighScores} alt="the highscores" />
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

export default PageOne
