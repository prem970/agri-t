import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo"><h1>Agrotech</h1></Link>

                {user ? (
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/buyer">Buyer</Link></li>
                        <li><Link to="/seller">Seller</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><button onClick={logout} className="logout-btn">Logout</button></li>
                    </ul>
                ) : (
                    <ul className="nav-menu">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
