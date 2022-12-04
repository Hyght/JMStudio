import React from 'react';
import '../App.css';
import Squiggle from '../images/Squiggle1.png';

function Landing() {

  const shush = () => {
    window.scrollTo(0, window.innerHeight / 0.3455);
  }

  return (
    <div className='landing-container'>
        <img src={Squiggle} className="Squiggle1"/>
        <div className='landing-headings'>
            <h1><span className='highlight'>One</span> Solution For</h1>
            <h1><span className='highlight'>All</span> Of Your Designs.</h1>
        </div>
        <div className='landing-contents'>
            <h2 className='landing-text'>Working alongside <span className='highlight'>30+</span> Graphic Designers, as well as handling a fast moving chain of clients, we provide the best solution to those looking <span className='highlight'>for/to</span> work.</h2>
            <div className='contact-container'>
                <a onClick={shush}>Get In Touch</a>
            </div>
        </div>  
        <a id="ForWork"/>

    </div>
  )
}

export default Landing