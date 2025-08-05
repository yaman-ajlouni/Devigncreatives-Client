import React, { useState } from 'react';
import { Bell, CheckCircle, Target, Image, MessageCircle, Calendar, Clock, Users, AlertCircle, Filter } from 'lucide-react';
import './Notifications.scss';

function Notifications() {
    const [filter, setFilter] = useState('all');
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'milestone',
            title: 'Milestone Completed: Design Mockups & Wireframes',
            message: 'The design mockups and wireframes phase has been successfully completed. The team has finished all design concepts and they are ready for your review.',
            timestamp: '2 hours ago',
            date: '2025-02-20',
            isRead: false,
            icon: CheckCircle,
            color: 'success'
        },
        {
            id: 2,
            type: 'milestone',
            title: 'New Milestone Started: Development Phase 1',
            message: 'Our development team has started working on the frontend development and core functionality of your website.',
            timestamp: '3 hours ago',
            date: '2025-02-20',
            isRead: false,
            icon: Target,
            color: 'primary'
        },
        {
            id: 3,
            type: 'image',
            title: 'New Images Added to Library',
            message: 'Sarah Johnson uploaded 3 new design mockups to your images library. The homepage design variations are now available for review.',
            timestamp: '5 hours ago',
            date: '2025-02-20',
            isRead: true,
            icon: Image,
            color: 'info'
        },
        {
            id: 4,
            type: 'message',
            title: 'New Message from Project Manager',
            message: 'Sarah Johnson sent you a message about the mobile navigation feedback. Please check your messages when you have a moment.',
            timestamp: '1 day ago',
            date: '2025-02-19',
            isRead: true,
            icon: MessageCircle,
            color: 'warning'
        },
        {
            id: 5,
            type: 'project',
            title: 'Project Timeline Updated',
            message: 'The project timeline has been updated based on the recent scope changes. The new estimated completion date is March 15, 2025.',
            timestamp: '1 day ago',
            date: '2025-02-19',
            isRead: true,
            icon: Calendar,
            color: 'info'
        },
        {
            id: 6,
            type: 'milestone',
            title: 'Milestone Completed: Initial Consultation & Planning',
            message: 'The initial consultation and planning phase has been completed. All project requirements and scope have been finalized.',
            timestamp: '1 week ago',
            date: '2025-02-13',
            isRead: true,
            icon: CheckCircle,
            color: 'success'
        },
        {
            id: 7,
            type: 'image',
            title: 'Brand Assets Added',
            message: 'Mike Chen has uploaded the color palette and typography guidelines to your images library.',
            timestamp: '1 week ago',
            date: '2025-02-12',
            isRead: true,
            icon: Image,
            color: 'info'
        },
        {
            id: 8,
            type: 'project',
            title: 'Welcome to Your Project!',
            message: 'Your Website Redesign Project has been initiated. Sarah Johnson has been assigned as your project manager and will guide you through the entire process.',
            timestamp: '2 weeks ago',
            date: '2025-02-06',
            isRead: true,
            icon: Users,
            color: 'primary'
        }
    ]);

    const filterTypes = [
        { id: 'all', name: 'All Notifications', count: notifications.length },
        { id: 'milestone', name: 'Milestones', count: notifications.filter(n => n.type === 'milestone').length },
        { id: 'image', name: 'Images', count: notifications.filter(n => n.type === 'image').length },
        { id: 'message', name: 'Messages', count: notifications.filter(n => n.type === 'message').length },
        { id: 'project', name: 'Project Updates', count: notifications.filter(n => n.type === 'project').length }
    ];

    const filteredNotifications = filter === 'all'
        ? notifications
        : notifications.filter(notification => notification.type === filter);

    const unreadCount = notifications.filter(n => !n.isRead).length;

    const markAsRead = (notificationId) => {
        setNotifications(notifications.map(notification =>
            notification.id === notificationId
                ? { ...notification, isRead: true }
                : notification
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Notifications</h1>
                <p>Stay updated with project alerts and important messages</p>
            </div>

            <div className="notifications-content">
                {/* Notifications Header */}
                <div className="notifications-header">
                    <div className="notifications-stats">
                        <div className="stat-item">
                            <Bell size={20} />
                            <span>{filteredNotifications.length} Notifications</span>
                        </div>
                        {unreadCount > 0 && (
                            <div className="stat-item unread">
                                <AlertCircle size={20} />
                                <span>{unreadCount} Unread</span>
                            </div>
                        )}
                    </div>

                    <div className="notifications-actions">
                        {unreadCount > 0 && (
                            <button className="btn btn-secondary" onClick={markAllAsRead}>
                                Mark All as Read
                            </button>
                        )}
                        <div className="filter-toggle">
                            <Filter size={18} />
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {filterTypes.map((filterType) => (
                        <button
                            key={filterType.id}
                            className={`filter-tab ${filter === filterType.id ? 'active' : ''}`}
                            onClick={() => setFilter(filterType.id)}
                        >
                            {filterType.name}
                            <span className="filter-count">{filterType.count}</span>
                        </button>
                    ))}
                </div>

                {/* Notifications List */}
                <div className="notifications-list">
                    {filteredNotifications.map((notification) => {
                        const IconComponent = notification.icon;
                        return (
                            <div
                                key={notification.id}
                                className={`notification-item ${notification.isRead ? 'read' : 'unread'} ${notification.color}`}
                                onClick={() => !notification.isRead && markAsRead(notification.id)}
                            >
                                <div className="notification-icon">
                                    <IconComponent size={24} />
                                </div>

                                <div className="notification-content">
                                    <div className="notification-header">
                                        <h3 className="notification-title">{notification.title}</h3>
                                        <div className="notification-meta">
                                            <span className="notification-time">{notification.timestamp}</span>
                                            {!notification.isRead && <div className="unread-dot"></div>}
                                        </div>
                                    </div>

                                    <p className="notification-message">{notification.message}</p>

                                    <div className="notification-footer">
                                        <div className="notification-date">
                                            <Clock size={14} />
                                            <span>{notification.date}</span>
                                        </div>
                                        <div className={`notification-type ${notification.type}`}>
                                            {notification.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredNotifications.length === 0 && (
                    <div className="empty-state">
                        <Bell size={64} />
                        <h3>No notifications found</h3>
                        <p>No notifications available for the selected filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Notifications;