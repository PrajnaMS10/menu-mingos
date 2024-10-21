import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <h2><span>Cafe</span> Mingo's</h2>
                    </div>
                    <ul>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Info</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
            </header>

            <div className="welcome-container">
                <div className="welcome-text">
                    <h3>Welcome to</h3>
                    <h1><span>Menu</span> Mingo's</h1>
                    <p>Your favorite spot for fresh coffee, delicious pastries, and pre-order convenience.</p>
                    <p><span>Enjoy your meal without the wait!</span></p>
                    <div className="buttons">
                        <button className="btn" onClick={handleLogin}>Log In</button>
                        <button className="btn" onClick={handleSignup}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
