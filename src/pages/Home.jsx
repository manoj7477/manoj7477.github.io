import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Award, FileText, Users, BookOpen, FlaskConical, TrendingUp, ExternalLink, Heart, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const stats = [
    { number: '3+', label: 'Publications', icon: BookOpen },
    { number: '7+', label: 'Research Positions', icon: FlaskConical },
    { number: '5+', label: 'Awards', icon: Award },
    { number: '8+', label: 'States Impacted', icon: Users },
];

const quickLinks = [
    {
        title: 'Research & Publications',
        description: 'Explore my work in immunology, virology, and cancer research',
        icon: Microscope,
        link: '/research',
        color: '#3b82f6',
    },
    {
        title: 'Awards & Honors',
        description: 'Recognition for contributions to healthcare research',
        icon: Award,
        link: '/awards',
        color: '#10b981',
    },
    {
        title: 'News & Media',
        description: 'Latest updates and media coverage',
        icon: FileText,
        link: '/news',
        color: '#f59e0b',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    return (
        <div className="section-padding">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Hero Section */}
                <motion.header variants={itemVariants} style={{ marginBottom: '3rem', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                            PhD Researcher @ Rīga Stradiņš University
                        </span>
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '1.5rem',
                        fontWeight: '600',
                        lineHeight: 1.2,
                    }}>
                        Advancing Healthcare Through{' '}
                        <span className="gradient-text">Innovative Research</span>
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '2rem',
                    }}>
                        Dedicated to bridging the gap between fundamental research and real-world applications
                        in immunology, virology, and cancer studies. Fellow of the American Society of Microbiology
                        and founder of JUST ONE STEP FOUNDATION.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/research" className="btn btn-primary">
                            View My Research <ArrowRight size={18} />
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            Learn More About Me
                        </Link>
                    </div>
                </motion.header>

                {/* Stats Grid */}
                <motion.div
                    variants={itemVariants}
                    className="grid-4"
                    style={{ marginBottom: '3rem' }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="card stat-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <stat.icon
                                size={32}
                                style={{ color: 'var(--color-accent)', marginBottom: '0.75rem' }}
                            />
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Current Focus */}
                <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
                    <div className="card" style={{
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                        color: 'white',
                        padding: '2rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <TrendingUp size={24} />
                            <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>Current Focus</h3>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                            I am a researcher dedicated to decoding viral reactivation through systems biology and 3D organoid models. My work aims to bridge the gap between persistent infections and chronic illness by developing innovative therapeutic strategies.
                        </p>
                        <h4 style={{ fontSize: '1rem', margin: '0 0 0.5rem 0', color: 'white', fontWeight: 600 }}>Background & Expertise</h4>
                        <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.95rem' }}>
                            My foundation lies in high-volume clinical research and cellular modeling. I previously analyzed immune patterns in a 7,900+ patient cohort at AIIMS Delhi and developed human lung macrophage models at the University of Bern to study microbiota interactions.
                        </p>
                    </div>
                </motion.div>

                {/* Ventures & Initiatives */}
                <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ventures & Initiatives</h2>
                    <div className="grid-2" style={{ gap: '1.5rem' }}>
                        <motion.a
                            href="https://justonestepfoundation.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card-interactive"
                            style={{ textDecoration: 'none', display: 'block' }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: 'var(--radius-md)',
                                background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                            }}>
                                <Heart size={28} color="white" />
                            </div>
                            <h3 style={{
                                fontSize: '1.15rem',
                                marginBottom: '0.5rem',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 600,
                            }}>
                                Just One Step Foundation
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                A non-profit organization dedicated to healthcare awareness, education, and community development across India.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#ec4899',
                                fontWeight: 500,
                                fontSize: '0.9rem',
                            }}>
                                Visit Website <ExternalLink size={16} />
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://biofolk.info"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card-interactive"
                            style={{ textDecoration: 'none', display: 'block' }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: 'var(--radius-md)',
                                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                            }}>
                                <Cpu size={28} color="white" />
                            </div>
                            <h3 style={{
                                fontSize: '1.15rem',
                                marginBottom: '0.5rem',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 600,
                            }}>
                                BioFolk AI
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                An innovative AI-powered platform bridging biotechnology and artificial intelligence for healthcare solutions.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#8b5cf6',
                                fontWeight: 500,
                                fontSize: '0.9rem',
                            }}>
                                Visit Website <ExternalLink size={16} />
                            </div>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Quick Links Grid */}
                <motion.div variants={itemVariants}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Explore My Work</h2>
                    <div className="grid-3">
                        {quickLinks.map((item, index) => (
                            <Link key={item.title} to={item.link} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="card card-interactive"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ height: '100%' }}
                                >
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: 'var(--radius-md)',
                                        background: `${item.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1rem',
                                    }}>
                                        <item.icon size={24} style={{ color: item.color }} />
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'var(--font-sans)',
                                        fontWeight: 600,
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                                        {item.description}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginTop: '1rem',
                                        color: item.color,
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                    }}>
                                        Explore <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Associated Institutions */}
                <motion.div variants={itemVariants} style={{ marginTop: '4rem' }}>
                    <div className="card" style={{
                        padding: '2rem',
                        background: 'var(--color-bg-tertiary)',
                        border: 'none',
                    }}>
                        <h3 style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            textAlign: 'center',
                            color: 'var(--color-text-secondary)',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 500,
                        }}>
                            Associated Institutions
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                            gap: '1.5rem',
                            alignItems: 'center',
                            justifyItems: 'center',
                        }}>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <motion.div
                                    key={n}
                                    style={{
                                        padding: '1rem',
                                        background: 'var(--color-bg-primary)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        height: '80px',
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <img
                                        src={asset(`institution${n}.png`)}
                                        alt="Institution"
                                        style={{
                                            maxHeight: '50px',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                            filter: 'grayscale(30%)',
                                            transition: 'filter 0.3s ease',
                                        }}
                                        onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                                        onMouseOut={(e) => e.target.style.filter = 'grayscale(30%)'}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
