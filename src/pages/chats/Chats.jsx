import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import './Chats.scss';

function Chats() {
    const [chatMessage, setChatMessage] = useState('');

    const adminChat = [
        {
            id: 1,
            sender: 'admin',
            senderName: 'Sarah Johnson',
            message: 'Hi John! I\'ve reviewed your latest feedback on the homepage design. We\'ll implement those changes by tomorrow.',
            timestamp: '2 hours ago',
            avatar: 'SJ'
        },
        {
            id: 2,
            sender: 'client',
            senderName: 'You',
            message: 'Great! Also, could we discuss the mobile navigation? I think it needs some adjustments.',
            timestamp: '3 hours ago',
            avatar: 'JD'
        },
        {
            id: 3,
            sender: 'admin',
            senderName: 'Sarah Johnson',
            message: 'Absolutely! I\'ll have our mobile designer take a look at it. What specific aspects would you like us to focus on?',
            timestamp: '1 day ago',
            avatar: 'SJ'
        },
        {
            id: 4,
            sender: 'client',
            senderName: 'You',
            message: 'The buttons feel too small and the spacing between menu items could be improved.',
            timestamp: '1 day ago',
            avatar: 'JD'
        },
        {
            id: 5,
            sender: 'admin',
            senderName: 'Sarah Johnson',
            message: 'Perfect! I\'ll pass this feedback to our design team. We should have the updated mobile navigation ready for review by Friday.',
            timestamp: '1 day ago',
            avatar: 'SJ'
        },
        {
            id: 6,
            sender: 'client',
            senderName: 'You',
            message: 'That sounds perfect. Also, I wanted to ask about the color scheme - can we make the primary blue slightly darker?',
            timestamp: '2 days ago',
            avatar: 'JD'
        },
        {
            id: 7,
            sender: 'admin',
            senderName: 'Sarah Johnson',
            message: 'Of course! I\'ll create a few variations of the blue color for you to choose from. I should have those ready by this afternoon.',
            timestamp: '2 days ago',
            avatar: 'SJ'
        },
        {
            id: 8,
            sender: 'admin',
            senderName: 'Sarah Johnson',
            message: 'Welcome to your project! I\'m Sarah, your dedicated project manager. I\'ll be here to assist you throughout the entire process. Feel free to reach out anytime!',
            timestamp: '1 week ago',
            avatar: 'SJ'
        }
    ];

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (chatMessage.trim()) {
            // Handle chat message submission
            console.log('Chat message sent:', chatMessage);
            setChatMessage('');
        }
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Feedback</h1>
                <p>Share your thoughts and review project deliverables</p>
            </div>

            <div className="chat-out-content">
                {/* Admin Chat Section */}
                <div className="section-card admin-chat-section">
                    <div className="section-header">
                        <div className="section-title">
                            <MessageCircle size={24} />
                            <h2>Chat with Project Manager</h2>
                        </div>
                        {/* <div className="admin-status">
                            <div className="status-indicator online"></div>
                            <span>Sarah Online</span>
                        </div> */}
                    </div>

                    <div className="chat-container">
                        <div className="chat-messages">
                            {adminChat.map((message) => (
                                <div key={message.id} className={`chat-message ${message.sender}`}>
                                    <div className="message-avatar">
                                        <span>{message.avatar}</span>
                                    </div>
                                    <div className="message-content">
                                        <div className="message-header">
                                            <span className="message-sender">{message.senderName}</span>
                                            <span className="message-time">{message.timestamp}</span>
                                        </div>
                                        <p className="message-text">{message.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleChatSubmit} className="chat-input-form">
                            <div className="chat-input-container">
                                <input
                                    type="text"
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                    placeholder="Type your message to Sarah..."
                                    className="chat-input"
                                />
                                <button type="submit" className="chat-send-btn" disabled={!chatMessage.trim()}>
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;