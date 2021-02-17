import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'
import Press from '../images/clock/press.png'
import Tic from '../images/clock/tic.png'
import Mobile from '../images/clock/mobile.png'




const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>This was my first real coding project! I focused a lot on the logic in Javascript and to make the result more meaningful and visible pleasing for me, I integrated this neumorphism style</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p>HTML
                    <br></br>
                    CSS
                    <br></br>
                    JavaScript
                </p>
            </div>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Press}/>
            <img className='' src={Tic}/>
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
            <Link to='/illustration'>Next</Link>
            </nav>
            </div>

        </div>

    </div>
)

export default PageOne