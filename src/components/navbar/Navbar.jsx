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
                <div className="brand">
                    <h1 className="brand-name">Devign Creatives</h1>
                    <span className="brand-subtitle">Client Dashboard</span>
                </div>
            </div>

            <div className="navbar-right">
                <div className="project-info">
                    <span className="project-name">Website Redesign Project</span>
                    <span className="project-status">In Progress</span>
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