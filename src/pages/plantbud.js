import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"
import Header from '../components/header'
import First from '../images/plantbud/first.png'
import About from '../images/plantbud/about.png'
import Shop from '../images/plantbud/shop.png'
import Signin from '../images/plantbud/signin.png'
import Mobile from '../images/plantbud/mobile.png'

const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>This project was a 48 hour sprint where I interpreted one of my classmates ’dream company’ and visualised it with code and graphic design</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p>HTML
                    <br></br>
                    SASS
                    <br></br>
                    JavaScript
                </p>
            </div>
        </div>

        <div className='internago'>
            <img className='' src={First}/>
        </div>

        <div className='illustrations-images '>
            <img className='' src={About}/>
            <img className='' src={Shop}/>
        </div>

        <div className='internago'>
            <img className='' src={Signin}/>
        </div>

        <div className='illustrations-last'>
            <img  src={Mobile}/>
        </div>

        <div className='header-center'>

        <div className='last-about'> 
        <Link to='/about' >About/Contact</Link>
        </div>

        <div className='next'>
            <nav>
                <Link to='/clock'>Next</Link>
            </nav>
        </div>

        </div>
        </div>
)

export default PageOne