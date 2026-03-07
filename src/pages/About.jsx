import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Wrench, MapPin, Calendar, Building } from 'lucide-react';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const tabs = [
    { id: 'overview', label: 'Overview', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
];

const skills = {
    'Immunology': [
        'Flow cytometry (CytoFLEX, Novocyte, BD FACSAria)',
        'Immunohistochemistry',
        'Fluorescence microscopy',
        'ELISA',
        'ABSL2 Facility Access & Training',
        'Histopathology',
        'Cytochemistry',
    ],
    'Molecular Biology': [
        'RT-PCR',
        'Western Blot',
        'Animal cell culture',
        'Cancer expression profiling',
        'Molecular genetics techniques',
    ],
    'Microbiology': [
        'MPN Testing',
        'Pure culture isolation',
        'Gram/Spore/Acid-Fast staining',
        'Microscopy',
        'In vivo Imaging',
    ],
    'Cell Biology': [
        'Mice handling and dissection',
        'Tissue Harvesting & Processing',
        'Tissue Sectioning & Staining (H&E, LFB, IHC)',
    ],
    'Bioinformatics': [
        'R Programming',
        'Python',
        'RNASeq Analysis',
        'Linux',
        'Molecular docking',
    ],
};

const experience = [
    {
        title: 'Research Associate',
        organization: 'All India Institute Of Medical Science (AIIMS - Delhi)',
        period: 'Sep 2024 – Present',
        location: 'New Delhi, India',
        description: 'A Population-based Prospective Cohort Study to Unravel the Causes of Stroke and Cognitive Decline and immune cell distribution working in 7900 patient blood samples.',
        current: true,
    },
    {
        title: 'Research Intern (Remote)',
        organization: 'National Defense Medical Center R.O.C.',
        period: 'Jun 2024 – Sep 2024',
        location: 'Taipei, Taiwan',
        description: 'Immunoproteomics and Bioinformatics for Effective Vaccine project.',
    },
    {
        title: 'Research Intern (Remote)',
        organization: 'University of Bern, DBMR',
        period: 'Mar 2024 – Aug 2024',
        location: 'Bern, Switzerland',
        description: 'Statistical analysis for physiologically relevant human lung macrophage model development.',
    },
    {
        title: 'Research Intern',
        organization: 'All India Institute Of Medical Science (AIIMS - Delhi)',
        period: 'Apr 2024 – Sep 2024',
        location: 'New Delhi, India',
        description: 'Impact of Non-steroidal anti-inflammatory Drug Diclofenac on POTE expression and ovarian cancer phenotype.',
    },
    {
        title: 'Research Intern',
        organization: 'National Institute of Immunology (NII)',
        period: 'Nov 2023 – Feb 2024',
        location: 'Delhi, India',
        description: 'Exploring alteration in cognitive behavior in Toxoplasma gondii infected mice.',
    },
    {
        title: 'R&D Associate',
        organization: 'MSV Laboratories Pvt. Ltd. DST Lab',
        period: 'Jun 2021 – Jun 2022',
        location: 'West Midnapore, India',
        description: 'Bio-instrumentation and Bio-fertilizer isolation and production.',
    },
];

const education = [
    {
        degree: 'Master of Science',
        field: 'Biotechnology & Immunology',
        institution: 'KIIT University',
        period: '2022 - 2024',
        grade: 'CGPA: 7.59',
        thesis: 'Elucidation of POTE Protein expression by in silico and In vitro Approach in Ovarian Cancer',
    },
    {
        degree: 'Bachelor of Science (Honours)',
        field: 'Biotechnology, Chemistry & Immunology',
        institution: 'Vidyasagar University',
        period: '2019 - 2022',
        grade: 'CGPA: 8.52',
        thesis: 'Isolation and production of liquid nitrogen fixer bio-fertilizer and growth effects on chickpea',
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

const About = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div style={{ display: 'flex', gap: '0', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: '0 0 auto' }}>
                                <img
                                    src={asset('user.jpeg')}
                                    alt="Manoj Kumar Jana"
                                    style={{
                                        width: '300px',
                                        borderRadius: 'var(--radius-lg)',
                                        boxShadow: 'var(--shadow-lg)',
                                    }}
                                />
                            </div>
                            <div style={{ flex: '1', marginLeft: '-20px', paddingLeft: '40px' }}>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                                    Hello, I'm Manoj
                                </h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    I'm a researcher with a passion for understanding viral reactivation. Through innovative
                                    systems biology approaches and 3D organoid models, I aim to develop novel therapeutic
                                    strategies to mitigate the impact of persistent viral infections on human health.
                                </p>

                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    flexWrap: 'wrap',
                                    marginTop: '2rem',
                                }}>
                                    <span className="badge badge-primary">ASM Fellow</span>
                                    <span className="badge badge-success">NGO Founder</span>
                                    <span className="badge badge-warning">BioFolk-AI CEO</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'skills':
                return (
                    <motion.div
                        key="skills"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid-2"
                        style={{ gap: '1.5rem' }}
                    >
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    marginBottom: '1rem',
                                    color: 'var(--color-accent)',
                                    fontFamily: 'var(--font-sans)',
                                }}>
                                    {category}
                                </h4>
                                <div className="skill-tags">
                                    {items.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="skill-tag"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                );

            case 'experience':
                return (
                    <motion.div
                        key="experience"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="timeline">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="card" style={{ marginLeft: 0 }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'start',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            marginBottom: '0.75rem',
                                        }}>
                                            <h4 style={{
                                                fontSize: '1.1rem',
                                                margin: 0,
                                                fontFamily: 'var(--font-sans)',
                                                fontWeight: 600,
                                            }}>
                                                {exp.title}
                                            </h4>
                                            {exp.current && (
                                                <span className="badge badge-success">Current</span>
                                            )}
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            flexWrap: 'wrap',
                                            marginBottom: '0.75rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--color-text-muted)',
                                        }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <Building size={14} /> {exp.organization}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <Calendar size={14} /> {exp.period}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <MapPin size={14} /> {exp.location}
                                            </span>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '0.95rem' }}>{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'education':
                return (
                    <motion.div
                        key="education"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid-2"
                        style={{ gap: '1.5rem' }}
                    >
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1rem',
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'var(--color-accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <GraduationCap size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontSize: '1.1rem',
                                            margin: 0,
                                            fontFamily: 'var(--font-sans)',
                                            fontWeight: 600,
                                        }}>
                                            {edu.degree}
                                        </h4>
                                        <p style={{
                                            margin: 0,
                                            fontSize: '0.9rem',
                                            color: 'var(--color-accent)',
                                        }}>
                                            {edu.field}
                                        </p>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    flexWrap: 'wrap',
                                    marginBottom: '1rem',
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-muted)',
                                }}>
                                    <span>{edu.institution}</span>
                                    <span>|</span>
                                    <span>{edu.period}</span>
                                    <span>|</span>
                                    <span style={{ color: 'var(--color-success)' }}>{edu.grade}</span>
                                </div>

                                <div style={{
                                    padding: '1rem',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)',
                                }}>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '0.9rem',
                                        fontStyle: 'italic',
                                    }}>
                                        <strong>Thesis:</strong> {edu.thesis}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                );

            default:
                return null;
        }
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
                    <h1 className="section-title">About Me</h1>
                    <p className="section-subtitle">
                        Researcher, Innovator, and Healthcare Advocate
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div variants={itemVariants} className="tabs" style={{ maxWidth: '600px' }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <tab.icon size={16} style={{ marginRight: '0.5rem' }} />
                            {tab.label}
                        </button>
                    ))}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {renderContent()}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default About;
