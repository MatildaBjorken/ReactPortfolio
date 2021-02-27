import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from '../components/header'

import Me from '../images/me.png'
import Letter from '../images/newletter.png'


const SecondPage = () => (
  <div className='about'>
    <Header/>
  
    <div className='about-img'>
      <img className='about-me' src={Me}/>
         <p className='about-text'>Hey you! 
            My name is Matilda Björk and Iam a 19 year old frontend developer student @hyperisland
            <br></br><br></br>
            I am a positive, well organised and success driven team player with an eye for detail. Working with creativity to solve problems has always been a huge motivation, and is what drove me to become a frontend developer. I feel confidence in knowing that Ive found what I want to keep evolving and working with. 
            <br></br><br></br>
            Therefore, I am keen to gain more experience in the field. For this reason, I am looking for an internship as well as a temporary project to contribute to. In return, I would offer my full commitment, be an optimistic and ambitious addition to your team! 
            </p>
      </div>
      
      <div className='about-cv'>
        <div>
          <h3>Work Experience</h3>
          <br></br>
          <p>
          Assistant educator 	
          <br></br>
          Nationalmuseum, October 2018 - Ongoing
          <br></br><br></br>
          Studio host
          <br></br>
          Kulturfestivalen, August 2019    			           
          <br></br><br></br>
          Teacher assistnat
          <br></br>
          Skapande skola, February 2020 - Ongoing
          <br></br><br></br>
          Audience host
          <br></br>
          Långsjö Teater, Mars 2020 - April 2020
          <br></br><br></br>
          Receptionist
          <br></br>
          Södersjukhuset, May 2020 - Ongoing 	
          <br></br><br></br>        
          Internship  
          <br></br> 							
          Gunila Axen Design, June -July 2020
          <br></br><br></br>
          Frontend Developer   	
          <br></br>					
          Internago, December - January 2021
          </p>
        </div>

        <div>
        <h3>Skills</h3>
        <br></br>
          <p>
          Adobe creative Suite
          <br></br> <br></br>
          HTML, CSS and JavaScript
          <br></br>	 <br></br>
          Knowledge of Python, PHP, React
          <br></br>	 <br></br>
          UX/UI
          <br></br>	 <br></br>
          Web design 
          <br></br>	 <br></br>
          Web development
          <br></br>	 <br></br>
          Attention to Detail
          <br></br>	 <br></br>
          Creative thinking
          <br></br>	 <br></br>
          Teamwork and Collaboration skills
          <br></br>	 <br></br>
          Fluent in Swedish and English
          <br></br>	 <br></br>	
          Driving license
          <br></br> <br></br>
          Happy and optimistic ;-)
          
          </p>
        </div>

        <div>
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
          </p>
        </div>

      </div>

      <div className='about-letter'>
        <img  src={Letter}/>
          <p className='about-contact'>
            Sweden, Stockholm
            <br></br>
            +46 70 982 98 30
            <br></br>
            <br></br>
            <a className='about-mail' href="mailto:matilda.bjork@hyperisland.se">matilda.bjork@hyperisland.se</a> 
            <br></br>
            <br></br>
            <a className='about-mail' href="https://github.com/MatildaBjorken">go to my github!</a>   
          </p>
          
      </div>
        <div className='about-link'>
        <Link className='about-back' to='https://romantic-keller-760dd7.netlify.app'> Go Back :-)</Link>
        </div>
  </div>
)

export default SecondPage
