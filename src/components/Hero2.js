import React, { Component } from "react";

import hero from "../images/hero-img.png"

class Hero2 extends Component {
    render() {
        return (
            <section className="hero">
                <img src={hero} alt="hero-img" className="hero-img" />
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>

            </section>
        )
    }
}

export default Hero2;