import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, MessageCircle, Image, Bell, Zap, LogOut, X } from 'lucide-react';
import './Sidebar.scss';

function Sidebar({ isOpen, toggleSidebar }) {
    // Add/remove body class for mobile sidebar blur effect
    useEffect(() => {
        if (window.innerWidth <= 768) {
            if (isOpen) {
                document.body.classList.add('sidebar-open');
            } else {
                document.body.classList.remove('sidebar-open');
            }
        }
        
        return () => {
            document.body.classList.remove('sidebar-open');
        };
    }, [isOpen]);
    const menuItems = [
        {
            path: '/project-detail',
            name: 'Project Detail',
            icon: BarChart3
        },
        {
            path: '/feedback',
            name: 'Feedback',
            icon: MessageCircle
        },
        {
            path: '/images-library',
            name: 'Images Library',
            icon: Image
        },
        {
            path: '/notifications',
            name: 'Notifications',
            icon: Bell
        },
        {
            path: '/extra-work',
            name: 'Extra Work',
            icon: Zap
        }
    ];

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logout clicked');
        // You can add actual logout functionality like:
        // - Clear authentication tokens
        // - Redirect to login page
        // - Clear user session data
    };

    return (
        <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <button className="sidebar-close" onClick={toggleSidebar}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        {menuItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <li key={index} className="nav-item">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'active' : ''}`
                                        }
                                        onClick={() => window.innerWidth <= 768 && toggleSidebar()}
                                    >
                                        <span className="nav-icon">
                                            <IconComponent size={20} />
                                        </span>
                                        <span className="nav-text">{item.name}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <div className="progress-summary">
                        <h3>Project Progress</h3>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '65%' }}></div>
                        </div>
                        <span className="progress-text">65% Complete</span>
                    </div>

                    <div className="logout-section">
                        <button className="logout-btn" onClick={handleLogout}>
                            <LogOut size={18} />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;