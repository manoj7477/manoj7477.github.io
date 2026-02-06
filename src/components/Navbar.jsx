import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Research', path: '/research' },
        { name: 'Awards', path: '/awards' },
        { name: 'News', path: '/news' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200" style={{ height: '80px', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-heading)' }}>
                    <span style={{ color: 'var(--primary)' }}>Manoj</span> Kumar Jana
                </Link>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                style={{
                                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: location.pathname === link.path ? '600' : '500',
                                    fontSize: '1rem',
                                }}
                                onMouseOver={(e) => { if (location.pathname !== link.path) e.target.style.color = 'var(--text-heading)' }}
                                onMouseOut={(e) => { if (location.pathname !== link.path) e.target.style.color = 'var(--text-muted)' }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle Logic (Simplified for now) */}
                <div style={{ display: 'none' }}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
