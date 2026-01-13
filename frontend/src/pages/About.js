import React from 'react';

const About = () => {
    const data = [
        { label: "Global Agricultural GDP", value: "4%" },
        { label: "Total Arable Land", value: "1.5B Hectares" },
        { label: "Water usage for Ag", value: "70%" },
        { label: "Digital Ag Growth", value: "12% Annually" }
    ];

    return (
        <div className="page-container">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>About <span style={{ color: '#2ecc71' }}>Agrotech</span></h1>
                <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1rem', color: '#555' }}>
                    Agrotech is a digital platform designed to bridge the gap between traditional farming and modern technology.
                    Our mission is to empower farmers with data-driven insights and a direct-to-buyer marketplace.
                </p>
            </div>

            <div className="card-grid">
                {data.map((item, i) => (
                    <div key={i} className="standard-card" style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#2ecc71' }}>{item.value}</h2>
                        <p style={{ fontWeight: '600', color: '#2c3e50' }}>{item.label}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '60px', background: 'white', padding: '40px', borderRadius: '15px' }}>
                <h2>Our Impact on Agriculture</h2>
                <p style={{ marginTop: '20px' }}>
                    Agriculture remains the backbone of the global economy, providing livelihoods for over 1 billion people.
                    At Agrotech, we focus on:
                </p>
                <ul style={{ padding: '20px 40px' }}>
                    <li><strong>Market Transparency:</strong> Real-time pricing for crops across different regions.</li>
                    <li><strong>Sustainability:</strong> Promoting eco-friendly farming practices via AI monitoring.</li>
                    <li><strong>Direct Trade:</strong> Removing middlemen so sellers earn more and buyers pay less.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
