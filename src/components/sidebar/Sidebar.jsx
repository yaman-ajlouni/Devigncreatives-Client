import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, MessageCircle, Image, Bell, Zap, LogOut, X } from 'lucide-react';
import './Sidebar.scss';

function Sidebar({ isOpen, toggleSidebar }) {
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

    // Handle body scroll prevention on mobile
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;

            if (isOpen && isMobile) {
                // Store current scroll position
                const scrollY = window.scrollY;

                // Prevent scrolling and maintain position
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollY}px`;
                document.body.style.width = '100%';
                document.body.classList.add('sidebar-open');
            } else {
                // Restore scrolling
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.classList.remove('sidebar-open');

                // Restore scroll position
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            }
        };

        // Initial setup
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            // Restore body styles
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.classList.remove('sidebar-open');

            // Remove event listener
            window.removeEventListener('resize', handleResize);

            // Restore scroll position if needed
            const scrollY = document.body.style.top;
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay for mobile */}
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-content">
                    {/* Header with close button (mobile only) */}
                    <div className="sidebar-header">
                        <button className="sidebar-close" onClick={toggleSidebar}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
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

                    {/* Footer */}
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
        </>
    );
}

export default Sidebar;