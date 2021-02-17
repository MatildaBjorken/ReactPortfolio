import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'
import Rick from '../images/mini/rick-and-morty.png'
import Habit from '../images/mini/habit-tracker.png'
import Magic from '../images/mini/magic.png'




const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>Some small projects I have done for myself to learn coding more!</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p>HTML
                    <br></br>
                    CSS
                    <br></br>
                    JavaScript
                    <br></br>
                    Local Storage
                    <br></br>
                    API
                </p>
            </div>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Rick}/>
            <img className='' src={Habit}/>
        </div>

        <div className='illustrations-last'>
            <img  src={Magic}/>
        </div>



        <div className='header-center'>

            <div className='last-about'> 
            <Link to='/about' >About/Contact</Link>
            </div>

            <div className='next'>
            <nav>
            <Link to='/ricola'>Next</Link>
            </nav>
            </div>

        </div>

    </div>
)

export default PageOne