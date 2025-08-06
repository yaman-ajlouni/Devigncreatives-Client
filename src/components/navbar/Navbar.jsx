import React from 'react';
import logo from '../../assets/images/devigncreatives-logo.png'
import './Navbar.scss';

function Navbar({ toggleSidebar }) {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="menu-toggle" onClick={toggleSidebar}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div className="logo-container">
                    <img src={logo} alt="Devign Creatives" className="logo" />
                </div>
            </div>

            <div className="navbar-right">
                <div className="project-info">
                    <span className="project-name">ShamSuperStore</span>
                </div>

                <div className="user-profile">
                    <div className="user-avatar">
                        <span>JD</span>
                    </div>
                    <div className="user-info">
                        <span className="user-name">John Doe</span>
                        <span className="user-role">Client</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;