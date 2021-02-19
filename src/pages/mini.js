import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'
import Rick from '../images/mini/insect.png'
import Habit from '../images/mini/colorgame.png'
import Magic from '../images/mini/magic.png'
import Meals from '../images/mini/meals.png'

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

        <div className='link-git'>
            <a href="https://matildabjorken.github.io/insects/">link to the insect site</a>
            <br></br> <br></br>
            <a href="https://matildabjorken.github.io/colorGame/">link to the color game</a>
            <br></br> <br></br>
            <a href="https://matildabjorken.github.io/magic8/">link to the magic 8 ball</a>
            <br></br> <br></br>
            <a href="https://matildabjorken.github.io/recipies/">link to the meal site</a>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Rick}/>
            <img className='' src={Habit}/>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Magic}/>
            <img className='' src={Meals}/>
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