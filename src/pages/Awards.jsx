import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

const awards = [
    {
        id: 1,
        title: 'Best Volunteer Award - World Cancer Congress 2024',
        img: '/award-1.jpg',
        description: 'Received the Best Volunteer Award at the World Cancer Congress 2024 for outstanding contributions to cancer research and community outreach.',
        year: '2024',
        category: 'Excellence',
    },
    {
        id: 2,
        title: 'ASM Fellow Recognition',
        img: '/award-6.jpeg',
        description: 'Honored as a Fellow of the American Society of Microbiology for dedication and leadership in advancing scientific knowledge.',
        year: '2024',
        category: 'Fellowship',
    },
    {
        id: 3,
        title: 'Bharat Gaurav Puraskar',
        img: '/award-3.jpeg',
        description: 'Master\'s work selected for the prestigious "Bharat Gaurav Puraskar," awarded by the KIK Foundation for significant contributions to research.',
        year: '2024',
        category: 'National Award',
    },
    {
        id: 4,
        title: 'Research Excellence Award',
        img: '/award-5.jpeg',
        description: 'Recognized for innovative research work in the field of immunology and cancer studies.',
        year: '2023',
        category: 'Research',
    },
    {
        id: 5,
        title: 'Academic Achievement Award',
        img: '/award-4.jpeg',
        description: 'In recognition of outstanding academic performance and dedication to scientific pursuits.',
        year: '2023',
        category: 'Academic',
    },
    {
        id: 6,
        title: 'Best Poster Presentation',
        img: '/award-2.jpeg',
        description: 'Best poster presentation at the national conference for work on biofertilizer research.',
        year: '2022',
        category: 'Presentation',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Awards = () => {
    const [selectedAward, setSelectedAward] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const goToNext = () => {
        setLightboxIndex((prev) => (prev + 1) % awards.length);
    };

    const goToPrev = () => {
        setLightboxIndex((prev) => (prev - 1 + awards.length) % awards.length);
    };

    return (
        <div className="section-padding">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <h1 className="section-title">Awards & Honors</h1>
                    <p className="section-subtitle">
                        Recognition for contributions to healthcare research and scientific advancement
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div variants={itemVariants} className="grid-4" style={{ marginBottom: '3rem' }}>
                    {[
                        { icon: Trophy, label: 'Awards Received', value: '6+' },
                        { icon: Star, label: 'Fellowships', value: '1' },
                        { icon: Award, label: 'National Awards', value: '2' },
                        { icon: Award, label: 'International', value: '1' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="card stat-card"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <stat.icon size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
                            <div className="stat-number" style={{ fontSize: '2rem' }}>{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Awards Grid */}
                <motion.div variants={itemVariants}>
                    <div className="grid-3">
                        {awards.map((award, index) => (
                            <motion.div
                                key={award.id}
                                className="card award-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                style={{ cursor: 'pointer' }}
                                onClick={() => openLightbox(index)}
                            >
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={award.img}
                                        alt={award.title}
                                        className="award-card-image"
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-md)',
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '0.75rem',
                                        right: '0.75rem',
                                    }}>
                                        <span className="badge badge-primary">{award.year}</span>
                                    </div>
                                </div>

                                <div style={{ padding: '1rem 0 0' }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--color-accent)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: 600,
                                    }}>
                                        {award.category}
                                    </span>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        marginTop: '0.5rem',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'var(--font-sans)',
                                        fontWeight: 600,
                                        lineHeight: 1.4,
                                    }}>
                                        {award.title}
                                    </h4>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--color-text-muted)',
                                        margin: 0,
                                        lineHeight: 1.6,
                                    }}>
                                        {award.description.length > 100
                                            ? award.description.substring(0, 100) + '...'
                                            : award.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
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
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '800px' }}
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

                            <img
                                src={awards[lightboxIndex].img}
                                alt={awards[lightboxIndex].title}
                                style={{
                                    width: '100%',
                                    maxHeight: '60vh',
                                    objectFit: 'contain',
                                    borderRadius: 'var(--radius-lg)',
                                }}
                            />

                            <div className="lightbox-caption" style={{ maxWidth: '600px', margin: '1.5rem auto 0' }}>
                                <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                                    {awards[lightboxIndex].title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    {awards[lightboxIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Awards;
