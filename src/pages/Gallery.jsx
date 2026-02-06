import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

const galleryItems = [
    { id: 1, text: 'Manoj with his parents', img: '/Gallery-1.jpeg', category: 'Family' },
    { id: 2, text: 'Manoj, along with his guide and inspiration Dr. Sudip Das, is an important and supportive presence in his life', img: '/Gallery-2.jpeg', category: 'Mentors' },
    { id: 3, text: "Manoj with his master's time professors Dr. Naresh Chandra Bal FRSB & Dr. Gargi Dey", img: '/3rd_gallery.jpg', category: 'Academic' },
    { id: 4, text: 'Manoj with Prof G K Rath, MD founder of (NCI-AIIMS) National Cancer Institute', img: '/Gallery-4.jpeg', category: 'Professional' },
    { id: 5, text: 'Manoj with Prof. G. P. Talwar (FAMS, FASc, FNASc, FNA, FRCOG), Former Director, NII', img: '/Gallery-5.jpeg', category: 'Professional' },
    { id: 6, text: "Manoj with his master's time professors Dr. Amrita Mishra & Dr. Vishakha Raina", img: '/Gallery-6.jpeg', category: 'Academic' },
    { id: 7, text: 'Manoj with Dr. Professor Rupa Rajan, MD top neurologist from AIIMS Delhi', img: '/Gallery-7.jpeg', category: 'Professional' },
    { id: 8, text: "Manoj with Dr. Bimal Prasad Jit, a chance Scientist Master's thesis Co-guide", img: '/Gallery-8.jpeg', category: 'Mentors' },
    { id: 9, text: 'Happy World Students Day - Certificate awarded by ICMR scientist Mahesh Chandra Sahu', img: '/Gallery-9.jpeg', category: 'Awards' },
    { id: 10, text: 'Workshop on Molecular and Genomic Techniques in Cancer Studies (MAGTICS 2023) at NIT-ROURKELA', img: '/Gallery-10.jpeg', category: 'Events' },
    { id: 11, text: 'Summer in IISER KOLKATA under guidance of Dr. Jayasri Das Sarma', img: '/Gallery-11.jpeg', category: 'Academic' },
    { id: 12, text: 'With Prof Dr. Achal Kumar Srivastava, renowned Indian neurologist and researcher at AIIMS', img: '/Gallery-12.jpeg', category: 'Professional' },
    { id: 13, text: 'Manoj with Sirsendu Bikash Maiti Sir, a visionary businessman and first scientific guide', img: '/Gallery-13.jpeg', category: 'Mentors' },
    { id: 14, text: 'Manoj with his school teachers and friends', img: '/Gallery-14.jpeg', category: 'Family' },
    { id: 15, text: 'EMBO Young scientists forum 2025 as a volunteer', img: '/new.jpg', category: 'Events' },
];

const categories = ['All', 'Professional', 'Academic', 'Mentors', 'Family', 'Events', 'Awards'];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const Gallery = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    const openLightbox = (index) => {
        const actualIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id);
        setLightboxIndex(actualIndex);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const goToNext = () => {
        setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
    };

    const goToPrev = () => {
        setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    const handleKeyDown = (e) => {
        if (lightboxIndex === null) return;
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'Escape') closeLightbox();
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    return (
        <div className="section-padding">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <h1 className="section-title">Photo Gallery</h1>
                    <p className="section-subtitle">
                        Moments from my academic journey, conferences, and collaborations
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
                    className="card"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        padding: '1.5rem 2rem',
                        marginBottom: '2rem',
                        background: 'var(--color-bg-tertiary)',
                    }}
                >
                    <Images size={32} style={{ color: 'var(--color-accent)' }} />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                            {galleryItems.length} Photos
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            Click on any image to view in full screen
                        </div>
                    </div>
                </motion.div>

                {/* Filter Pills */}
                <motion.div variants={itemVariants} className="filter-pills" style={{ marginBottom: '2rem' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                            {category !== 'All' && (
                                <span style={{ marginLeft: '0.5rem', opacity: 0.7 }}>
                                    ({galleryItems.filter(i => i.category === category).length})
                                </span>
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    className="gallery-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="gallery-item"
                                variants={itemVariants}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => openLightbox(index)}
                                onHoverStart={() => setHoveredId(item.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.text}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                                <motion.div
                                    className="gallery-item-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                                >
                                    <div style={{ width: '100%' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '0.5rem',
                                        }}>
                                            <ZoomIn size={24} color="white" />
                                        </div>
                                        <p style={{
                                            textAlign: 'center',
                                            fontSize: '0.85rem',
                                            lineHeight: 1.4,
                                        }}>
                                            {item.text.length > 60
                                                ? item.text.substring(0, 60) + '...'
                                                : item.text}
                                        </p>
                                        <span className="badge badge-primary" style={{ marginTop: '0.5rem' }}>
                                            {item.category}
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            textAlign: 'center',
                            padding: '4rem',
                            color: 'var(--color-text-muted)',
                        }}
                    >
                        No photos found in this category.
                    </motion.div>
                )}
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={closeLightbox}>
                                <X size={24} />
                            </button>

                            <button className="lightbox-nav prev" onClick={goToPrev}>
                                <ChevronLeft size={24} />
                            </button>

                            <button className="lightbox-nav next" onClick={goToNext}>
                                <ChevronRight size={24} />
                            </button>

                            <motion.img
                                key={lightboxIndex}
                                src={galleryItems[lightboxIndex].img}
                                alt={galleryItems[lightboxIndex].text}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '75vh',
                                    objectFit: 'contain',
                                    borderRadius: 'var(--radius-lg)',
                                }}
                            />

                            <div className="lightbox-caption">
                                <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
                                    {galleryItems[lightboxIndex].category}
                                </span>
                                <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                                    {galleryItems[lightboxIndex].text}
                                </p>
                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    marginTop: '1rem',
                                }}>
                                    {lightboxIndex + 1} / {galleryItems.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
