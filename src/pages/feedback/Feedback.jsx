import React, { useState } from 'react';
import { Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import './Feedback.scss';

const Feedback = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mock feedback history - replace with actual data from your API
    const [feedbackHistory] = useState([
        {
            id: 1,
            title: "Website Loading Issue",
            content: "The dashboard takes too long to load, especially during peak hours.",
            status: "pending",
            submittedAt: "2024-01-15T10:30:00Z",
            response: null
        },
        {
            id: 2,
            title: "Feature Request",
            content: "Could you add a dark mode option to the interface?",
            status: "resolved",
            submittedAt: "2024-01-10T14:22:00Z",
            response: "Thank you for the suggestion! Dark mode has been added to our roadmap."
        },
        {
            id: 3,
            title: "UI Bug Report",
            content: "The navigation menu doesn't work properly on mobile devices.",
            status: "resolved",
            submittedAt: "2024-01-08T09:15:00Z",
            response: "Fixed in the latest update. Please refresh your browser."
        }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.content.trim()) return;

        setIsSubmitting(true);

        try {
            // Replace with your actual API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form after successful submission
            setFormData({ title: '', content: '' });

            // You might want to show a success message or update the feedback history
            console.log('Feedback submitted:', formData);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'resolved':
                return 'resolved';
            case 'pending':
                return 'pending';
            default:
                return 'pending';
        }
    };

    return (
        <div className="feedback-content">
            {/* Feedback Form Section */}
            <div className="section-card feedback-form-section">
                <div className="section-header">
                    <div className="section-title">
                        <MessageSquare size={24} />
                        <h2>Send Feedback</h2>
                    </div>
                </div>

                <form className="feedback-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">
                            Feedback Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Brief description of your feedback..."
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content" className="form-label">
                            Details
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            placeholder="Please provide detailed information about your feedback, suggestions, or issues..."
                            className="form-textarea"
                            rows="5"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting || !formData.title.trim() || !formData.content.trim()}
                    >
                        <Send size={18} />
                        {isSubmitting ? 'Sending...' : 'Send Feedback'}
                    </button>
                </form>
            </div>

            {/* Feedback History Section */}
            <div className="section-card feedback-history-section">
                <div className="section-header">
                    <div className="section-title">
                        <Clock size={24} />
                        <h2>Feedback History</h2>
                    </div>
                    <div className="history-count">
                        {feedbackHistory.length} feedback{feedbackHistory.length !== 1 ? 's' : ''}
                    </div>
                </div>

                <div className="feedback-list">
                    {feedbackHistory.length === 0 ? (
                        <div className="empty-state">
                            <MessageSquare size={48} />
                            <p>No feedback submitted yet.</p>
                            <span>Your feedback history will appear here.</span>
                        </div>
                    ) : (
                        feedbackHistory.map((feedback) => (
                            <div key={feedback.id} className="feedback-item">
                                <div className="feedback-header">
                                    <div className="feedback-info">
                                        <h3 className="feedback-title">{feedback.title}</h3>
                                        <div className="feedback-meta">
                                            <span className={`feedback-status ${getStatusColor(feedback.status)}`}>
                                                {feedback.status === 'resolved' && <CheckCircle size={14} />}
                                                {feedback.status}
                                            </span>
                                            <span className="feedback-date">
                                                {formatDate(feedback.submittedAt)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="feedback-content-text">
                                    <p>{feedback.content}</p>
                                </div>

                                {feedback.response && (
                                    <div className="admin-response">
                                        <div className="response-header">
                                            <strong>Admin Response:</strong>
                                        </div>
                                        <p>{feedback.response}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Feedback;