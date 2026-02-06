import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, FileText, Microscope, ChevronDown, ChevronUp } from 'lucide-react';

const categories = ['All', 'Journal Articles', 'Book Chapters', 'Ongoing'];

const publications = [
    {
        id: 1,
        title: 'Isolation and production of liquid nitrogen fixer biofertilizer and growth effects on chickpea (Cicer arietinum)',
        authors: 'Manoj Kumar Jana et al.',
        journal: 'Research Journal',
        year: '2023',
        type: 'Journal Articles',
        description: 'The aim of present study was the production of liquid nitrogen fixer biofertilizer using selective and optimized media. Nitrogen containing products which helps to increase germination rate, increase production rate with growth of plants. Field inoculation of plants with Azotobacter and Rhizobium after cultivation of experimental plants it is noted that 20-40 kg nitrogen remain back which benefits for further plantation and reduce use of 25% chemical fertilizers.',
        link: 'https://www.researchgate.net/profile/Dr-De/publication/371911712_ISOLATION_AND_PRODUCTION_OF_LIQUID_NITROGEN_FIXER_BIOFERTILIZER_AND_GROWTH_EFFECTS_ON_CHICKPEA_CICER_ARIETINUM/links/649becd18de7ed28ba602f57/ISOLATION-AND-PRODUCTION-OF-LIQUID-NITROGEN-FIXER-BIOFERTILIZER-AND-GROWTH-EFFECTS-ON-CHICKPEA-CICER-ARIETINUM.pdf',
    },
    {
        id: 2,
        title: 'Deep learning in clinical genomics-based cancer diagnosis',
        authors: 'Manoj Kumar Jana et al.',
        journal: 'Elsevier - Book Chapter',
        year: '2024',
        type: 'Book Chapters',
        description: 'Deep learning, an artificial intelligence facet, has impacted distinct fields, including natural language processing and computer vision. Its advancements have transformed how computational and data scientists approach data, turning unstructured information into valuable insights. This is particularly impactful in clinical genomics, where high-throughput sequencing generates vast amounts of data. Techniques such as whole genome sequencing and transcriptomic profiling produce enormous datasets that are challenging to analyze manually. Deep learning tools like "Deep Variant" enhance accuracy in variant calling, improving diagnostic precision.',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/B978044327574600014X',
    },
    {
        id: 3,
        title: 'Monoclonal Antibodies: A Promising Weapon Against the Silent Pandemic of Multidrug-Resistant Bacteria',
        authors: 'Manoj Kumar Jana et al.',
        journal: 'In Progress',
        year: '2024',
        type: 'Ongoing',
        description: 'Monoclonal antibodies are emerging as a powerful tool in combating multidrug-resistant bacteria, offering a targeted approach to tackle this growing global health crisis.',
        link: '#',
    },
];

const researchInterests = [
    {
        title: 'Immunology & Virology',
        description: 'Investigating immune responses and developing novel therapeutic strategies for viral infections.',
        icon: Microscope,
    },
    {
        title: 'Cancer Research',
        description: 'Studying POTE protein expression and its implications in ovarian cancer through in silico and in vitro approaches.',
        icon: FileText,
    },
    {
        title: 'Clinical Genomics',
        description: 'Applying deep learning techniques to improve cancer diagnosis through genomic analysis.',
        icon: BookOpen,
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

const PublicationCard = ({ pub }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            className="card publication-card"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ x: 4 }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '0.5rem',
            }}>
                <span className={`badge ${pub.type === 'Ongoing' ? 'badge-warning' : 'badge-primary'}`}>
                    {pub.type}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{pub.year}</span>
            </div>

            <h4 style={{ marginBottom: '0.75rem', lineHeight: 1.4 }}>{pub.title}</h4>

            <div className="publication-meta">
                <span>{pub.authors}</span>
                <span>•</span>
                <span>{pub.journal}</span>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'var(--color-text-secondary)',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            lineHeight: 1.7,
                        }}>
                            {pub.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border)',
            }}>
                <button
                    onClick={() => setExpanded(!expanded)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-accent)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                    }}
                >
                    {expanded ? (
                        <>Show Less <ChevronUp size={16} /></>
                    ) : (
                        <>Read Abstract <ChevronDown size={16} /></>
                    )}
                </button>

                {pub.link !== '#' && (
                    <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                        View Paper <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

const Research = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPublications = activeCategory === 'All'
        ? publications
        : publications.filter(pub => pub.type === activeCategory);

    return (
        <div className="section-padding">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <h1 className="section-title">Research & Publications</h1>
                    <p className="section-subtitle">
                        Exploring the frontiers of immunology, virology, and cancer research
                    </p>
                </motion.div>

                {/* Research Statement */}
                <motion.div
                    variants={itemVariants}
                    className="card"
                    style={{
                        marginBottom: '3rem',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%)',
                        borderLeft: '4px solid var(--color-accent)',
                    }}
                >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Research Focus</h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                        My research centers on harnessing immune intelligence to outsmart viral evolution.
                        I am deeply interested in the fields of Virology and Immunology, with a focus on
                        understanding immune responses and developing novel therapeutic strategies.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                        Currently, I am working on population-based cohort studies to unravel the causes of
                        stroke and cognitive decline, while also contributing to lung microbiota research
                        at the University of Bern, Switzerland.
                    </p>
                </motion.div>

                {/* Research Interests */}
                <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Research Interests</h2>
                    <div className="grid-3">
                        {researchInterests.map((interest, index) => (
                            <motion.div
                                key={interest.title}
                                className="card"
                                whileHover={{ scale: 1.02, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: 'var(--radius-md)',
                                    background: 'var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                }}>
                                    <interest.icon size={24} color="white" />
                                </div>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: 600,
                                }}>
                                    {interest.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-muted)' }}>
                                    {interest.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Publications */}
                <motion.div variants={itemVariants}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Publications</h2>

                    {/* Filter Pills */}
                    <div className="filter-pills">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                                {category !== 'All' && (
                                    <span style={{ marginLeft: '0.5rem', opacity: 0.7 }}>
                                        ({publications.filter(p => p.type === category).length})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Publications List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <AnimatePresence mode="wait">
                            {filteredPublications.map((pub) => (
                                <PublicationCard key={pub.id} pub={pub} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredPublications.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                textAlign: 'center',
                                padding: '3rem',
                                color: 'var(--color-text-muted)',
                            }}
                        >
                            No publications found in this category.
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Research;
