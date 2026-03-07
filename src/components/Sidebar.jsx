import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Download, Linkedin, Mail, BookOpen, MapPin, Home, User, FlaskConical, Award, Newspaper, Images, Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { path: '/', label: 'Overview', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/research', label: 'Research & Publications', icon: FlaskConical },
    { path: '/awards', label: 'Awards & Honors', icon: Award },
    { path: '/news', label: 'News & Media', icon: Newspaper },
    { path: '/gallery', label: 'Gallery', icon: Images },
];

const socialLinks = [
    { href: 'https://linkedin.com/in/manoj-2000', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:manojkumarjana2000@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://www.researchgate.net/profile/Manoj-Jana-2', icon: BookOpen, label: 'ResearchGate' },
    { href: 'https://scholar.google.com/citations?hl=en&user=GwFoJGIAAAAJ', icon: ExternalLink, label: 'Google Scholar' },
];

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="mobile-header" style={{
                display: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                background: 'var(--color-bg-primary)',
                borderBottom: '1px solid var(--color-border)',
                padding: '0 1rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 101,
            }}>
                <style>{`
                    @media (max-width: 768px) {
                        .mobile-header { display: flex !important; }
                        .sidebar {
                            transform: translateX(-100%);
                            transition: transform 0.3s ease;
                        }
                        .sidebar.open { transform: translateX(0); }
                        .main-content { margin-top: 60px; }
                    }
                `}</style>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img
                        src="/main_photo.jpg"
                        alt="Manoj Kumar Jana"
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Manoj Kumar Jana</span>
                </div>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                    }}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 99,
                            display: 'none',
                        }}
                        className="mobile-overlay"
                    >
                        <style>{`
                            @media (max-width: 768px) {
                                .mobile-overlay { display: block !important; }
                            }
                        `}</style>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.aside
                className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    {/* Profile Section */}
                    <motion.div
                        style={{ marginBottom: '2rem', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            margin: '0 auto 1rem',
                            border: '3px solid var(--color-accent)',
                            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)',
                        }}>
                            <img
                                src="/main_photo.jpg"
                                alt="Manoj Kumar Jana"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <h1 style={{
                            fontSize: '1.5rem',
                            marginBottom: '0.25rem',
                            fontFamily: 'var(--font-serif)',
                        }}>
                            Manoj Kumar Jana
                        </h1>
                        <p style={{
                            color: 'var(--color-accent)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '0.5rem',
                        }}>
                            PhD Researcher
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.4rem',
                            fontSize: '0.85rem',
                            color: 'var(--color-text-muted)',
                        }}>
                            <MapPin size={14} />
                            <span>Rīga Stradiņš University</span>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <nav style={{ marginBottom: '2rem' }}>
                        {navItems.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <link.icon size={18} />
                                    {link.label}
                                </NavLink>
                            </motion.div>
                        ))}
                    </nav>
                </div>

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {/* Social Links */}
                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                    }}>
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                title={social.label}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            marginBottom: '1rem',
                        }}
                    >
                        <Download size={18} /> Download CV
                    </a>

                    {/* Copyright */}
                    <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        textAlign: 'center',
                        margin: 0,
                    }}>
                        © {new Date().getFullYear()} Manoj Kumar Jana
                        <br />
                        <span style={{ color: 'var(--color-accent)' }}>
                            Built by Mindrona
                        </span>
                    </p>
                </motion.div>
            </motion.aside>
        </>
    );
};

export default Sidebar;
