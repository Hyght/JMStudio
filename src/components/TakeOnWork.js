/** @format */

import React from "react";
import "../App.css";

function TakeOnWork() {

    const shush = () => {
        window.scrollTo(0, window.innerHeight / 0.3455);
    }

    return (
        
        <div className="for-work-container">
            <a id="TakeOn"/>

            <div className="for-work-contents">
                <div className="for-work-header">
                    <h1>
                        Ready To <span className="highlight">Take On</span>{" "}
                        Work?
                    </h1>
                    <div className="take-on-work-description">
                        <div className="descriptions">
                            <h2>
                                If you're a{" "}
                                <span className="highlight">
                                    Graphic Designer
                                </span>{" "}
                                looking for an extra load of clients, just
                                starting out, or wanting to take your workload
                                to the next level, we are here to{" "}
                                <span className="highlight">help.</span>
                            </h2>
                            <h2>
                                We're able to bring you the opportunity to start
                                working with a secure line of customers that
                                want work in{" "}
                                <span className="highlight">your</span> niche.
                            </h2>
                        </div>

                        <div className="contact-container">
                            <a onClick={shush}>Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow" />
        </div>
    );
}

export default TakeOnWork;
