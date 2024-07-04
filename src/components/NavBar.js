import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">BODA</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">홈</Link>
                <Link to="/external">현장</Link>
                <Link to="/internal">사무실</Link>
            </div>
            <div className="navbar-actions">
                {isLoggedIn ? (
                    <>
                        <button onClick={handleLogout} className="navbar-logout">Logout</button>
                        <Link to="/profile" className="navbar-profile">My Profile</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="navbar-login">Login</Link>
                        <Link to="/signup" className="navbar-signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
