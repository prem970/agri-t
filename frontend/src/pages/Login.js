import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/');
        } catch (err) {
            alert("Wrong Credentials! Use admin@agrotech.com / password123");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <h2>Welcome to Agrotech</h2>
                    <p>Connecting farmers, buyers, and sellers for a sustainable future.</p>
                </div>
                <div className="login-right">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            className="input-field"
                            type="email"
                            placeholder="admin@agrotech.com"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="input-field"
                            type="password"
                            placeholder="password123"
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="submit-btn" style={{ marginBottom: '10px' }}>Login</button>
                        <p style={{ textAlign: 'center' }}>
                            New here? <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: '#2ecc71', fontWeight: '600' }}>Register Now</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
