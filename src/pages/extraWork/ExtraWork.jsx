import React, { useState } from 'react';
import { Plus, Clock, DollarSign, AlertCircle, CheckCircle, Send, FileText, Calendar, Target } from 'lucide-react';
import './ExtraWork.scss';

function ExtraWork() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        timeline: '',
        budget: ''
    });

    const [requests, setRequests] = useState([
        {
            id: 1,
            title: 'Additional Page Design',
            description: 'Need an extra landing page for our new product launch',
            timeline: '1 week',
            budget: '$800',
            status: 'approved',
            submittedDate: '2025-02-18',
            response: 'Request approved! We\'ll start working on this next week.'
        },
        {
            id: 2,
            title: 'SEO Optimization',
            description: 'Optimize the website for search engines and improve page speed',
            timeline: '2 weeks',
            budget: '$1200',
            status: 'pending',
            submittedDate: '2025-02-15',
            response: null
        },
        {
            id: 3,
            title: 'Social Media Integration',
            description: 'Add social media sharing buttons and Instagram feed integration',
            timeline: '1 week',
            budget: '$500',
            status: 'completed',
            submittedDate: '2025-02-10',
            response: 'Work completed successfully! Social media integration is now live.'
        }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new request
        const newRequest = {
            id: requests.length + 1,
            ...formData,
            status: 'pending',
            submittedDate: new Date().toISOString().split('T')[0],
            response: null
        };

        // Add to requests list
        setRequests([newRequest, ...requests]);

        // Reset form
        setFormData({
            title: '',
            description: '',
            timeline: '',
            budget: ''
        });
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved': return <CheckCircle size={16} />;
            case 'completed': return <CheckCircle size={16} />;
            case 'pending': return <Clock size={16} />;
            default: return <AlertCircle size={16} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved': return 'success';
            case 'completed': return 'success';
            case 'pending': return 'warning';
            default: return 'info';
        }
    };

    const stats = [
        { title: 'Total Requests', value: requests.length, icon: FileText, color: 'primary' },
        { title: 'Pending Review', value: requests.filter(r => r.status === 'pending').length, icon: Clock, color: 'warning' },
        { title: 'Approved', value: requests.filter(r => r.status === 'approved').length, icon: CheckCircle, color: 'success' },
        { title: 'Completed', value: requests.filter(r => r.status === 'completed').length, icon: Target, color: 'success' }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Extra Work</h1>
                <p>Request additional services and track extra project requirements</p>
            </div>

            <div className="extra-work-content">
                {/* Stats Cards */}
                <div className="status-grid">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className={`status-card status-${stat.color}`}>
                                <div className="status-icon">
                                    <IconComponent size={28} />
                                </div>
                                <h3>{stat.title}</h3>
                                <p className="status-value">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Main Content Grid */}
                <div className="content-grid">
                    {/* Extra Work Request Form */}
                    <div className="section-card form-section">
                        <div className="section-header">
                            <div className="section-title">
                                <Plus size={24} />
                                <h2>Request Extra Work</h2>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="extra-work-form">
                            <div className="form-group">
                                <label htmlFor="title">Request Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Brief title for your extra work request..."
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe what you need in detail..."
                                    rows="5"
                                    required
                                    className="form-textarea"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="timeline">Preferred Timeline</label>
                                    <input
                                        type="text"
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 1 week, ASAP, etc."
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="budget">Estimated Budget</label>
                                    <input
                                        type="text"
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        placeholder="e.g., $500, Flexible, etc."
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary">
                                    <Send size={16} />
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Previous Requests */}
                    <div className="section-card requests-section">
                        <div className="section-header">
                            <div className="section-title">
                                <FileText size={24} />
                                <h2>Previous Requests</h2>
                            </div>
                            <span className="view-all">View All</span>
                        </div>

                        <div className="requests-list">
                            {requests.map((request) => (
                                <div key={request.id} className="request-item">
                                    <div className="request-header">
                                        <div className="request-info">
                                            <h4>{request.title}</h4>
                                        </div>
                                        <div className="request-status-info">
                                            <span className={`request-status ${getStatusColor(request.status)}`}>
                                                {getStatusIcon(request.status)}
                                                {request.status}
                                            </span>
                                            <span className="request-date">{request.submittedDate}</span>
                                        </div>
                                    </div>

                                    <p className="request-description">{request.description}</p>

                                    <div className="request-details">
                                        {request.timeline && (
                                            <div className="detail-item">
                                                <Calendar size={14} />
                                                <span>{request.timeline}</span>
                                            </div>
                                        )}
                                        {request.budget && (
                                            <div className="detail-item">
                                                <DollarSign size={14} />
                                                <span>{request.budget}</span>
                                            </div>
                                        )}
                                    </div>

                                    {request.response && (
                                        <div className="request-response">
                                            <strong>Team Response:</strong>
                                            <p>{request.response}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExtraWork;