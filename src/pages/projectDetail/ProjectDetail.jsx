import React from 'react';
import { Calendar, CheckCircle, Clock, Play, MessageCircle, Bell, Target, Users } from 'lucide-react';
import './ProjectDetail.scss';

function ProjectDetail() {
    const milestones = [
        { id: 1, title: 'Initial Consultation & Planning', status: 'completed', date: '2025-01-15', description: 'Project scope and requirements defined' },
        { id: 2, title: 'Design Mockups & Wireframes', status: 'completed', date: '2025-02-01', description: 'Initial design concepts approved' },
        { id: 3, title: 'Development Phase 1', status: 'in-progress', date: '2025-02-15', description: 'Frontend development and core functionality' },
        { id: 4, title: 'Content Integration', status: 'pending', date: '2025-03-01', description: 'Adding content and final touches' },
        { id: 5, title: 'Testing & Launch', status: 'pending', date: '2025-03-15', description: 'Quality assurance and go-live' }
    ];

    const updates = [
        { id: 1, title: 'Homepage Design Approved', date: '2025-02-20', type: 'milestone', description: 'Client approved the new homepage layout and design elements.' },
        { id: 2, title: 'Mobile Responsive Updates', date: '2025-02-18', type: 'progress', description: 'Completed mobile optimization for all main pages.' },
        { id: 3, title: 'Color Scheme Revision', date: '2025-02-15', type: 'change', description: 'Updated brand colors based on client feedback.' }
    ];

    const recentChats = [
        { id: 1, sender: 'Sarah Johnson', role: 'Project Manager', message: 'The homepage mockups are ready for your review. Please check your email for the preview links.', time: '2 hours ago', avatar: 'SJ' },
        { id: 2, sender: 'Mike Chen', role: 'Designer', message: 'I\'ve updated the color palette based on your feedback. The new version looks much better!', time: '1 day ago', avatar: 'MC' },
        { id: 3, sender: 'You', role: 'Client', message: 'Love the new design direction! Can we make the header a bit larger?', time: '2 days ago', avatar: 'JD' }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Project Detail</h1>
                <p>Track your project progress, milestones, and deliverables</p>
            </div>

            <div className="project-detail-content">
                {/* Status Cards */}
                <div className="status-grid">
                    <div className="status-card status-primary">
                        <div className="status-icon">
                            <Target size={28} />
                        </div>
                        <h3>Project Status</h3>
                        <p className="status-value">In Progress</p>
                    </div>

                    <div className="status-card status-success">
                        <div className="status-icon">
                            <Play size={28} />
                        </div>
                        <h3>Start Date</h3>
                        <p className="status-value">Jan 15, 2025</p>
                    </div>

                    <div className="status-card status-warning">
                        <div className="status-icon">
                            <Calendar size={28} />
                        </div>
                        <h3>Due Date</h3>
                        <p className="status-value">Mar 15, 2025</p>
                    </div>

                    <div className="status-card status-info">
                        <div className="status-icon">
                            <CheckCircle size={28} />
                        </div>
                        <h3>End Date</h3>
                        <p className="status-value">Mar 15, 2025</p>
                    </div>
                </div>

                {/* Project Overview */}
                <div className="project-info-details">
                    <h2>Project Overview</h2>
                    <p>Welcome to your project dashboard. Here you can track the progress of your Website Redesign Project. Our team is working diligently to deliver exceptional results that exceed your expectations.</p>
                </div>

                {/* Main Content Grid */}
                <div className="content-grid">
                    {/* Milestones Section */}
                    <div className="section-card milestones-section">
                        <div className="section-header">
                            <div className="section-title">
                                <Target size={24} />
                                <h2>Project Milestones</h2>
                            </div>
                            <span className="milestone-progress">3 of 5 completed</span>
                        </div>

                        <div className="milestones-list">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.id} className={`milestone-item ${milestone.status}`}>
                                    <div className="milestone-indicator">
                                        <div className="milestone-dot"></div>
                                        {index < milestones.length - 1 && <div className="milestone-line"></div>}
                                    </div>
                                    <div className="milestone-content">
                                        <div className="milestone-header">
                                            <h4>{milestone.title}</h4>
                                            <span className="milestone-date">{milestone.date}</span>
                                        </div>
                                        <p className="milestone-description">{milestone.description}</p>
                                        <span className={`milestone-status ${milestone.status}`}>
                                            {milestone.status === 'completed' && <CheckCircle size={16} />}
                                            {milestone.status === 'in-progress' && <Clock size={16} />}
                                            {milestone.status === 'pending' && <Calendar size={16} />}
                                            {milestone.status.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Updates Section */}
                    <div className="section-card updates-section">
                        <div className="section-header">
                            <div className="section-title">
                                <Bell size={24} />
                                <h2>Recent Updates</h2>
                            </div>
                            <span className="view-all">View All</span>
                        </div>

                        <div className="updates-list">
                            {updates.map((update) => (
                                <div key={update.id} className="update-item">
                                    <div className={`update-type ${update.type}`}></div>
                                    <div className="update-content">
                                        <h4>{update.title}</h4>
                                        <p>{update.description}</p>
                                        <span className="update-date">{update.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Chats Section */}
                    <div className="section-card chats-section">
                        <div className="section-header">
                            <div className="section-title">
                                <MessageCircle size={24} />
                                <h2>Recent Chats</h2>
                            </div>
                            <span className="view-all">View All</span>
                        </div>

                        <div className="chats-list">
                            {recentChats.map((chat) => (
                                <div key={chat.id} className="chat-item">
                                    <div className="chat-avatar">
                                        <span>{chat.avatar}</span>
                                    </div>
                                    <div className="chat-content">
                                        <div className="chat-header">
                                            <span className="chat-sender">{chat.sender}</span>
                                            <span className="chat-role">{chat.role}</span>
                                            <span className="chat-time">{chat.time}</span>
                                        </div>
                                        <p className="chat-message">{chat.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="chat-input-section">
                            <button className="btn btn-primary">
                                <MessageCircle size={16} />
                                Start New Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;