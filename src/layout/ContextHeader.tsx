import React from 'react';

interface ContextHeaderProps {
    headline: string;
    subtext: string;
}

export const ContextHeader: React.FC<ContextHeaderProps> = ({ headline, subtext }) => {
    const containerStyle: React.CSSProperties = {
        padding: 'var(--space-5) 0 var(--space-4) 0',
        maxWidth: '720px',
    };

    const headlineStyle: React.CSSProperties = {
        fontSize: '48px',
        margin: `0 0 var(--space-2) 0`,
        color: 'var(--text-primary)',
        fontWeight: 400,
    };

    const subtextStyle: React.CSSProperties = {
        fontSize: '18px',
        color: 'var(--text-secondary)',
        margin: 0,
        lineHeight: 'var(--line-height)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headlineStyle}>{headline}</h1>
            <p style={subtextStyle}>{subtext}</p>
        </div>
    );
};
