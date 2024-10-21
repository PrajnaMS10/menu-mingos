import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        usn: '',
        mail: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            localStorage.setItem('token', res.data.token); // Store token in local storage
            alert('Signup successful');
            window.location.href = '/restaurant'; // Redirect to the restaurant page
        } catch (err) {
            alert('Error signing up: ' + (err.response ? err.response.data.message : err.message));
        }
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <h2><span>Cafe</span> Mingos</h2>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/info">Info</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="signup-container">
                <h1><span>Menu</span> Mingos</h1>
                <h2><span>SIGN UP</span></h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            required
                        />

                        <label htmlFor="usn">USN</label>
                        <input
                            type="text"
                            id="usn"
                            name="usn"
                            value={formData.usn}
                            onChange={handleChange}
                            placeholder="Enter your USN"
                            required
                        />

                        <label htmlFor="mail">Mail</label>
                        <input
                            type="email"
                            id="mail"
                            name="mail"
                            value={formData.mail}
                            onChange={handleChange}
                            placeholder="Enter your mail"
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <span>
                        <button type="submit">Sign Up</button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
