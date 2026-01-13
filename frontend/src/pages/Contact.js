import React from 'react';

const Contact = () => {
    const handleSumbit = (e) => {
        e.preventDefault();
        alert("Thank you! Our Agrotech support team will contact you within 24 hours.");
    };

    return (
        <div className="page-container">
            <h1 style={{ textAlign: 'center' }}>Get in Touch</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>Have questions about our marketplace? We're here to help.</p>

            <div className="contact-flex">
                <div className="contact-info">
                    <div className="standard-card" style={{ marginBottom: '20px' }}>
                        <h3>📍 Headquarters</h3>
                        <p>123 Green Valley Road, Agri City, 56789</p>
                    </div>
                    <div className="standard-card" style={{ marginBottom: '20px' }}>
                        <h3>📧 Email Support</h3>
                        <p>support@agrotech.com</p>
                        <p>sales@agrotech.com</p>
                    </div>
                    <div className="standard-card">
                        <h3>📞 Call Us</h3>
                        <p>+1 (800) AGRO-TECH</p>
                        <p>Mon - Fri, 9am - 6pm</p>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Send us a Message</h3>
                    <form onSubmit={handleSumbit} style={{ marginTop: '20px' }}>
                        <label>Your Name</label>
                        <input className="input-field" style={{ width: '100%' }} type="text" placeholder="John Doe" required />

                        <label>Your Email</label>
                        <input className="input-field" style={{ width: '100%' }} type="email" placeholder="john@example.com" required />

                        <label>Subject</label>
                        <select className="input-field" style={{ width: '100%' }}>
                            <option>General Inquiry</option>
                            <option>Buyer Support</option>
                            <option>Seller Registration</option>
                        </select>

                        <label>Message</label>
                        <textarea className="input-field" style={{ width: '100%', height: '120px' }} placeholder="How can we help you?" required></textarea>

                        <button type="submit" className="submit-btn" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
