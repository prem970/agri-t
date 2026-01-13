import React from 'react';

import bg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bg})` }}>
            <div className="hero-content">
                <p className="hero-subtitle">WELCOME TO AGRICULTURE FARM</p>
                <h1 className="hero-title">Agriculture & <br /> Eco Farming</h1>
                <p className="hero-description">
                    There are many passages of Lorem Ipsum, but the majority <br />
                    have suffered alteration in some form.
                </p>
                <button className="hero-btn">Discover More</button>
            </div>
        </section>
    );
};

export default Hero;
