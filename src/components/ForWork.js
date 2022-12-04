/** @format */

import React from "react";
import "../App.css";

import web from '../images/web.png'
import paintbrush from '../images/paintbrush.png'
import image from '../images/photo.png'

function ForWork() {

    const shush = () => {
        window.scrollTo(0, window.innerHeight / 0.3455);
    }
    
    return (
        <div className="for-work-container">
            <div className="for-work-contents">
                <div className="for-work-header">
                    <h1>
                        Looking <span className="highlight">For</span> Work?
                    </h1>
                    <div className="for-work-description">
                        <h2>
                            Our broad reach of Designers lead to{" "}
                            <span className="higlight">outstanding </span>{" "}
                            pieces of artworks being delivered. Get in touch{" "}
                            <span className="highlight">now </span>with a brief
                            description of your needs and we'll find you the{" "}
                            <span className="highlight">best</span> Designer for
                            the job.
                        </h2>
                        <div className="contact-container">
                            <a onClick={shush}>Get In Touch</a>
                        </div>
                    </div>
                </div>
                <div className="services-container">
                    <div className="service-display">
                        <div className="service-icon">
                            <img src={web}/>
                        </div>
                        <h2 className="service-description">
                            <span className="highlight">Professional</span> Websites Both Designed And/Or Developed By Our Team
                        </h2>
                    </div>
                    <div className="service-display">
                        <div className="service-icon">
                            <img src={paintbrush}/>
                        </div>
                        <h2 className="service-description">
                            <span className="highlight">Executive</span> Branding Including Logos, Twitter banners, And Custom Artworks.
                        </h2>
                    </div>
                    <div className="service-display">
                        <div className="service-icon">
                            <img src={image}/>

                        </div>
                        <h2 className="service-description">
                            <span className="highlight">High-End</span> NFT Collections With Tailored Attributes, Art Styles And More
                        </h2>
                    </div>
                </div>
            </div>

            <div className="shadow" />

        </div>
    );
}

export default ForWork;
