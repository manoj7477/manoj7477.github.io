import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Newspaper, TrendingUp, ArrowRight } from 'lucide-react';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const newsItems = [
    {
        id: 1,
        title: 'Delhi-AIIMS Advances Breast and Ovarian Cancer Detection Using AI',
        img: asset('news-1.jpeg'),
        link: 'https://www.drugtodayonline.com/medical-news/news-topic/17808-delhi-aiims-advances-breast-and-ovarian-cancer-detection-using-ai',
        description: 'AIIMS Delhi has made significant strides in cancer detection technology, leveraging Artificial Intelligence to improve early diagnosis rates for breast and ovarian cancers. This breakthrough research aims to revolutionize cancer screening and treatment outcomes.',
        date: '2024',
        category: 'Research',
        featured: true,
    },
    {
        id: 2,
        title: 'AIIMS Unveils Indigenously Developed Technology for Early Detection of Cancer',
        img: asset('news-2.jpg'),
        link: 'https://www.thehindu.com/sci-tech/health/aiims-unveils-indigenously-developed-technology-for-early-detection-of-cancer/article67821512.ece',
        description: 'A breakthrough in medical technology as AIIMS unveils a new, indigenously developed system designed to detect cancer at its earliest stages, promising better patient outcomes and more accessible healthcare solutions.',
        date: '2024',
        category: 'Innovation',
        featured: true,
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

const News = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="section-padding">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <h1 className="section-title">News & Media</h1>
                    <p className="section-subtitle">
                        Latest updates, research highlights, and media coverage
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    variants={itemVariants}
                    className="card"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        padding: '1.5rem',
                        marginBottom: '3rem',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                    }}
                >
                    {[
                        { icon: Newspaper, label: 'Media Features', value: '2+' },
                        { icon: TrendingUp, label: 'Research Impact', value: 'National' },
                        { icon: Calendar, label: 'Latest Coverage', value: '2024' },
                    ].map((item) => (
                        <div
                            key={item.label}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: 'white',
                            }}
                        >
                            <item.icon size={28} style={{ opacity: 0.9 }} />
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.value}</div>
                                <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Featured News */}
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <TrendingUp size={20} style={{ color: 'var(--color-accent)' }} />
                        Featured Coverage
                    </h2>
                </motion.div>

                {/* News Grid */}
                <motion.div variants={itemVariants}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {newsItems.map((item, index) => (
                            <motion.article
                                key={item.id}
                                className="card news-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                onHoverStart={() => setHoveredId(item.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                whileHover={{ y: -4 }}
                                style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    padding: 0,
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Image Section */}
                                <div style={{
                                    position: 'relative',
                                    width: '350px',
                                    minHeight: '250px',
                                    flexShrink: 0,
                                    overflow: 'hidden',
                                }}>
                                    <motion.img
                                        src={item.img}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        animate={{
                                            scale: hoveredId === item.id ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {item.featured && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            left: '1rem',
                                        }}>
                                            <span className="badge badge-success">Featured</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div style={{
                                    flex: 1,
                                    padding: '2rem 2rem 2rem 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        marginBottom: '1rem',
                                    }}>
                                        <span className="badge badge-primary">{item.category}</span>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--color-text-muted)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                        }}>
                                            <Calendar size={14} />
                                            {item.date}
                                        </span>
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.35rem',
                                        marginBottom: '1rem',
                                        fontFamily: 'var(--font-sans)',
                                        fontWeight: 600,
                                        lineHeight: 1.4,
                                    }}>
                                        {item.title}
                                    </h3>

                                    <p style={{
                                        flex: 1,
                                        fontSize: '0.95rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: '1.5rem',
                                    }}>
                                        {item.description}
                                    </p>

                                    <motion.a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{
                                            alignSelf: 'flex-start',
                                        }}
                                        whileHover={{ x: 5 }}
                                    >
                                        Read Full Article <ExternalLink size={16} />
                                    </motion.a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="card"
                    style={{
                        marginTop: '3rem',
                        textAlign: 'center',
                        padding: '3rem',
                        background: 'var(--color-bg-tertiary)',
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Interested in Research Collaborations?
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                        I'm always open to discussing new research opportunities, collaborations, and innovative projects in healthcare and biotechnology.
                    </p>
                    <a
                        href="mailto:manojkumarjana2000@gmail.com"
                        className="btn btn-primary"
                    >
                        Get In Touch <ArrowRight size={16} />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default News;
