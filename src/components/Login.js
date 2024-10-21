import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Login = () => {
    const [formData, setFormData] = useState({
        usn: '',
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
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token); // Store token in local storage
            alert('Login successful');
            window.location.href = '/restaurant'; // Redirect to the restaurant page
        } catch (err) {
            alert('Error logging in: ' + (err.response ? err.response.data.message : err.message));
        }
    };

    return (
        <div className="login">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <h2><span>Cafe</span> Mingos</h2>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Info</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
            </header>
            <div className="login-container">
                <h1><span>Menu</span> Mingos</h1>
                <h2><span>LOGIN</span></h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="usn">User ID</label>
                        <input
                            type="text"
                            id="usn"
                            name="usn"
                            value={formData.usn}
                            onChange={handleChange}
                            placeholder="Enter your USN"
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
