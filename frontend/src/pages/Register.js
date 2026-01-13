import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            alert("Registration Done! Now Login.");
            navigate('/login');
        } catch (err) {
            alert("Registration Failed!");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Join NaturaX</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Full Name" onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Register</button>
            </form>
            <p onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: 'blue' }}>Already have an account? Login</p>
        </div>
    );
};

export default Register;
