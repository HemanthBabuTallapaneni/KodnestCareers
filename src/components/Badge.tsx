import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'outline' | 'filled';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline' }) => {
    const baseStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1,
    };

    const variants = {
        outline: {
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            backgroundColor: 'transparent',
        },
        filled: {
            border: '1px solid transparent',
            color: 'var(--text-primary)',
            backgroundColor: 'var(--border-color)', // Muted fill
        }
    };

    return (
        <span style={{ ...baseStyle, ...variants[variant] }}>
            {children}
        </span>
    );
};
