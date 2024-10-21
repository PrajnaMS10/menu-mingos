import React, { useState } from 'react';
import './styles.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        userId: '',
        mail: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic
        console.log('Form data submitted:', formData);
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <h2><span>Cafe</span> Mingos</h2>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Info</a></li>
                        <li><a href="#">Help</a></li>
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

                        <label htmlFor="userId">User ID</label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                            placeholder="Enter your ID"
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
