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
                <p>This was my first real coding project! This is a pomodoro clock that helps you work more efficiently by keeping track of worktime and breaktime. 
                <br></br>
                I focused a lot on the logic in Javascript and to make the result more visibly pleasing, I integrated this neumorphism style.</p>
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

        <div className='link-git'>
            <a className='link-a' href="https://matildabjorken.github.io/clock/ ">link to the current website</a>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Press} />
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
            <Link to='/internago'>Next</Link>
            </nav>
            </div>

        </div>

    </div>
)

export default PageOne