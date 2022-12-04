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
            <img src={JMStudio}/>
            <a className='header-branding'><span className='highlight'>JM</span> STUDIO</a>
        </div>
        <a onClick={goToFor}>
            LOOKING <span className='highlight'>FOR</span> WORK
        </a>
        <a onClick={goToTake}>
            LOOKING <span className='highlight'>TO</span> WORK
        </a>
        <a onClick={goToContact}>
            <span className='highlight'>CONTACT US</span> 
        </a>
    </div>
  )
}

export default Navbar