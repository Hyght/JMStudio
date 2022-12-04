import React from 'react'
import JMStudio from '../images/JMStudio.png'
import '../App.css'

function Navbar() {

    const goToFor = () => {
        window.scrollTo(0, window.innerHeight / 1.1);
    }
    const goToTake = () => {
        window.scrollTo(0, window.innerHeight / 0.52);
    }
    const goToContact = () => {
        window.scrollTo(0, window.innerHeight / 0.344);
    }


  return (
    <div className='nav-bar-container'>
        <div className='branding-container'>
            <img src={JMStudio} alt=""/>
            <button className='header-branding'><span className='highlight'>JM</span> STUDIO</button>
        </div>
        <button onClick={goToFor}>
            LOOKING <span className='highlight'>FOR</span> WORK
        </button>
        <button onClick={goToTake}>
            LOOKING <span className='highlight'>TO</span> WORK
        </button>
        <button onClick={goToContact}>
            <span className='highlight'>CONTACT US</span> 
        </button>
    </div>
  )
}

export default Navbar