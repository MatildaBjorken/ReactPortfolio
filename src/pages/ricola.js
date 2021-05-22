import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'

import RicolaMain from '../images/ricola/desktop-main.png'
import Main from '../images/ricola/tilted-info.png'
import Sidebar from '../images/ricola/tilted-sidebar.png'
import Info from '../images/ricola/ricola-desktop-double.png'

import Cursor from "../components/dot"

const PageOne = () => (
    <div className='illustrations'>
        <Header/>
        <Cursor />
        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>A project between UX and Frontend students at Hyper Island where we developed a part of a website for Ricola that highlights their ecological footsteps and how they are sustainable.</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p>Gatsby
                    <br></br>
                    Illustrator
                    <br></br>
                    Figma
                </p>
            </div>
        </div>

        <div className='internago'>
            <img className='' src={RicolaMain} alt='the game'/>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Main} alt='the game starts'/>
            <img className='' src={Sidebar} alt='the highscores'/>
        </div>

        <div className="illustrations-last-one">
      <img src={Info} />
    </div>

        <div className='header-center'>

            <div className='last-about'> 
            <Link to='/news' >About/Contact</Link>
            </div>

            <div className='next'>
            <nav>
            <Link to='/mini'>Next</Link>
            </nav>
            </div>

        </div>

       
    </div>
)

export default PageOne