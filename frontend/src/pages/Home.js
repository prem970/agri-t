import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/naturax-hero.png';

const Home = () => {
    return (
        <div className="home">
            {/* 1. Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1 style={{ fontSize: '4rem', lineHeight: '1.1', fontWeight: '800' }}>
                        Empower Your Farm, <br />
                        <span style={{ color: 'var(--primary)' }}>Sustain Our Future</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', margin: '30px 0', color: '#444', maxWidth: '600px' }}>
                        Agrotech provides smart solutions for agricultural growth
                        connecting farmers with digital tools and global markets.
                        Modern farming starts here.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button className="btn-primary" style={{ padding: '18px 45px', fontSize: '1.1rem', borderRadius: '50px' }}>Explore More</button>
                        <button className="btn-primary" style={{ padding: '18px 45px', fontSize: '1.1rem', borderRadius: '50px', background: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)' }}>Watch Demo</button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="Modern Farming Agriculture" />
                </div>
            </header>

            {/* 2. Quick Access / About Summary */}
            <section className="page-container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>01 About Agrotech</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#666' }}>
                    Agrotech enhances farming productivity with AI insights, modern tools, and a direct digital marketplace.
                    We help farmers thrive in the modern economy.
                </p>
                <Link to="/about" className="btn-primary" style={{ textDecoration: 'none' }}>Learn More About Us</Link>
            </section>

            {/* 3. Global Stats */}
            <section style={{ background: '#2c3e50', color: 'white', padding: '60px 5%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <div><h2 style={{ color: '#2ecc71', fontSize: '3rem' }}>10K+</h2><p>Active Farmers</p></div>
                    <div><h2 style={{ color: '#2ecc71', fontSize: '3rem' }}>50+</h2><p>Crops Supported</p></div>
                    <div><h2 style={{ color: '#2ecc71', fontSize: '3rem' }}>1M+</h2><p>Tons Traded</p></div>
                </div>
            </section>

            {/* 4. Footer Section */}
            <footer className="footer">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Agrotech</h3>
                        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Leading the digital revolution in agriculture.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/buyer">Buyer Portal</Link></li>
                            <li><Link to="/seller">Seller Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Marketplace</h3>
                        <ul>
                            <li><Link to="/pricing">Market Pricing</Link></li>
                            <li><Link to="/contact">Support Center</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact Info</h3>
                        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>📍 123 Green Valley Road</p>
                        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>📧 support@agrotech.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Agrotech Project | Designed for University Project</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
