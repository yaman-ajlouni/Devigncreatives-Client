import React, { useState } from 'react';
import { Image, Calendar, Download, Eye, Grid, List, X } from 'lucide-react';
import './ImagesLibrary.scss';

function ImagesLibrary() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            title: 'Homepage Design - Desktop',
            uploadDate: '2025-02-20',
            description: 'Final homepage design for desktop view with new color scheme',
            thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop'
        },
        {
            id: 2,
            title: 'Mobile Navigation Concept',
            uploadDate: '2025-02-18',
            description: 'Updated mobile navigation with improved spacing and larger buttons',
            thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop'
        },
        {
            id: 3,
            title: 'Logo Variations',
            uploadDate: '2025-02-15',
            description: 'Different logo variations for various use cases',
            thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop'
        },
        {
            id: 4,
            title: 'Color Palette Reference',
            uploadDate: '2025-02-14',
            description: 'Updated brand color palette with accessibility improvements',
            thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop'
        },
        {
            id: 5,
            title: 'Initial Wireframe - Homepage',
            uploadDate: '2025-02-10',
            description: 'Early wireframe concept for homepage layout',
            thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop'
        },
        {
            id: 6,
            title: 'Typography Examples',
            uploadDate: '2025-02-08',
            description: 'Typography hierarchy and font pairing examples',
            thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop'
        },
        {
            id: 7,
            title: 'Contact Page Design',
            uploadDate: '2025-02-05',
            description: 'Contact page layout with form elements and map integration',
            thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
        },
        {
            id: 8,
            title: 'Service Icons Set',
            uploadDate: '2025-02-03',
            description: 'Custom icon set for services section',
            thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
            fullImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
        }
    ];

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const downloadImage = (image) => {
        // Create a temporary link element and trigger download
        const link = document.createElement('a');
        link.href = image.fullImage;
        link.download = `${image.title}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Images Library</h1>
                <p>Browse and view all project images and assets shared by the team</p>
            </div>

            <div className="images-library-content">
                {/* Library Header */}
                <div className="library-header">
                    <div className="library-info">
                        <div className="info-item">
                            <Image size={20} />
                            <span>{images.length} Images</span>
                        </div>
                    </div>

                    <div className="library-controls">
                        <div className="view-toggle">
                            <button
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <Grid size={18} />
                            </button>
                            <button
                                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Images Gallery */}
                <div className={`images-gallery ${viewMode}`}>
                    {images.map((image) => (
                        <div key={image.id} className="image-item">
                            <div className="image-thumbnail" onClick={() => openImageModal(image)}>
                                <img src={image.thumbnail} alt={image.title} />
                                <div className="image-overlay">
                                    <button className="overlay-btn">
                                        <Eye size={20} />
                                    </button>
                                    <button
                                        className="overlay-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            downloadImage(image);
                                        }}
                                    >
                                        <Download size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="image-info">
                                <h3 className="image-title">{image.title}</h3>
                                <p className="image-description">{image.description}</p>

                                <div className="image-meta">
                                    <div className="meta-item">
                                        <Calendar size={16} />
                                        <span>{image.uploadDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <div className="image-modal" onClick={closeImageModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeImageModal}>
                                <X size={24} />
                            </button>

                            <div className="modal-image">
                                <img src={selectedImage.fullImage} alt={selectedImage.title} />
                            </div>

                            <div className="modal-info">
                                <h3>{selectedImage.title}</h3>
                                <p>{selectedImage.description}</p>
                                <div className="modal-date">
                                    <Calendar size={16} />
                                    <span>{selectedImage.uploadDate}</span>
                                </div>
                                <button
                                    className="btn btn-primary download-btn"
                                    onClick={() => downloadImage(selectedImage)}
                                >
                                    <Download size={16} />
                                    Download Image
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImagesLibrary;