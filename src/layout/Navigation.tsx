import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/saved', label: 'Saved' },
    { path: '/digest', label: 'Digest' },
    { path: '/settings', label: 'Settings' },
    { path: '/proof', label: 'Proof' },
];

export const Navigation: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [location.pathname]);

    const navContainerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-3) var(--space-4)',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--surface)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
    };

    const brandStyle: React.CSSProperties = {
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        fontSize: '20px',
        color: 'var(--text-primary)',
        textDecoration: 'none',
    };

    const desktopNavStyle: React.CSSProperties = {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
    };

    const linkStyle = (isActive: boolean): React.CSSProperties => ({
        textDecoration: 'none',
        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: isActive ? 600 : 400,
        fontSize: '15px',
        paddingBottom: '4px',
        borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
        transition: 'color var(--transition)',
    });

    const hamburgerButtonStyle: React.CSSProperties = {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '8px',
    };

    const hamburgerLineStyle: React.CSSProperties = {
        width: '24px',
        height: '2px',
        backgroundColor: 'var(--text-primary)',
        transition: 'var(--transition)',
    };

    const mobileMenuOverlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'var(--surface)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-3) var(--space-4)',
        gap: 'var(--space-2)',
    };

    // Responsive logic
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav style={navContainerStyle}>
            <NavLink to="/" style={brandStyle}>
                Job Notification App
            </NavLink>

            {!isMobile ? (
                <div style={desktopNavStyle}>
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            style={({ isActive }) => linkStyle(isActive)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            ) : (
                <button
                    style={hamburgerButtonStyle}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle Navigation"
                >
                    <div style={{ ...hamburgerLineStyle, transform: isMobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
                    <div style={{ ...hamburgerLineStyle, opacity: isMobileOpen ? 0 : 1 }} />
                    <div style={{ ...hamburgerLineStyle, transform: isMobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
                </button>
            )}

            {isMobile && isMobileOpen && (
                <div style={mobileMenuOverlayStyle}>
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            style={({ isActive }) => ({
                                ...linkStyle(isActive),
                                display: 'block',
                                padding: 'var(--space-2) 0',
                                borderBottom: isActive ? 'none' : 'none',
                                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};
