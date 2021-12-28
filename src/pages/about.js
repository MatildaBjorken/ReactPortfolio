import React, { useEffect } from "react"
import { Link } from "gatsby"
import Me from "../images/me.png"
import Letter from "../images/newletter.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Aos from "aos"
import "aos/dist/aos.css"

const SecondPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="About" />
      <div className="about">
        <div className="about-img">
          <img
            className="about-me"
            src={Me}
            alt="illustration of me"
            data-aos="fade-up"
          />
          <p className="about-text" data-aos="fade-up">
            Hey you! My name is Matilda Björk and Iam a 20 year old frontend
            developer student @hyperisland
            <br></br>
            <br></br>I am a positive, well organised and success driven team
            player with an eye for detail. Working with creativity to solve
            problems has always been a huge motivation, and is what drove me to
            become a frontend developer. I feel confidence in knowing that Ive
            found what I want to keep evolving and working with.
            <br></br>
            <br></br>
            Therefore, I am keen to gain more experience in the field. For this
            reason, I am looking for a temporary project to contribute to. In
            return, I would offer my full commitment, be an optimistic and
            ambitious addition to your team!
          </p>
        </div>

        <div className="about-cv">
          <div data-aos="fade-up">
            <h3>Work Experience</h3>
            <br></br>
            <p>
              Assistant educator
              <br></br>
              Nationalmuseum, October 2018 - Ongoing
              <br></br>
              <br></br>
              Frontend Developer
              <br></br>
              Internago, December 2021 - Ongoing
              <br></br>
              <br></br>
              Frontent Developer Internship
              <br></br>
              Sphinxly, September 2021 - Ongoing
              <br></br>
              <br></br>
              Freelance
              <br></br>
              July 2021 - Ongoing
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>Skills</h3>
            <br></br>
            <p>
              HTML, CSS, JavaScript and React
              <br></br> <br></br>
              UX/UI
              <br></br> <br></br>
              Web design (Adobe creative Suite)
              <br></br> <br></br>
              Web development
              <br></br> <br></br>
              Attention to Detail
              <br></br> <br></br>
              Creative thinking
              <br></br> <br></br>
              Teamwork and Collaboration skills
              <br></br> <br></br>
              Fluent in Swedish and English
              <br></br> <br></br>
              Happy and optimistic ;-)
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>Education</h3>
            <br></br>
            <p>
              Cambridge IGCSE Art and Design
              <br></br>
              International qualification
              <br></br>
              2017
              <br></br> <br></br>
              KULTURAMA
              <br></br>
              Art and Design
              <br></br>
              August 2017 - June 2020
              <br></br> <br></br>
              HYPER ISLAND
              <br></br>
              Frontend Developer
              <br></br>
              August 2020 - June 2022
              <br></br> <br></br>
              The Complete JavaScript Course 2022 - Udemy
              <br></br>
              2020 - 2021
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>Clients I have worked with</h3>
            <br></br>
            <p>
              Internago AB
              <br></br> <br></br>
              Ricola
              <br></br> <br></br>
              SANDROCK TOURISM AB
            </p>
          </div>
        </div>

        <div className="about-letter">
          <img src={Letter} alt="illustration of letters" data-aos="fade-up" />

          <p className="about-contact" data-aos="fade-up">
            Sweden, Stockholm
            <br></br>
            +46 70 982 98 30
            <br></br>
            <br></br>
            <a
              className="about-mail"
              href="mailto:matilda.bjork@hyperisland.se"
            >
              matilda.bjork@hyperisland.se
            </a>
            <br></br>
            <br></br>
            <a className="about-mail" href="https://github.com/MatildaBjorken">
              go to my github!
            </a>
          </p>
        </div>

        <div className="about-link">
          <Link className="about-back" to="https://www.bjorkmatilda.com/">
            {" "}
            Go Back :-)
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
