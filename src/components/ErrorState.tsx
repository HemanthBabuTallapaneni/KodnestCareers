import React from 'react';

interface ErrorStateProps {
    title: string;
    message: string;
    resolution: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ title, message, resolution }) => {
    const containerStyle: React.CSSProperties = {
        backgroundColor: '#FFF0F0', // Very light red background, not full accent
        border: '1px solid var(--accent)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-3)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
    };

    const titleStyle: React.CSSProperties = {
        color: '#111111',
        margin: 0,
        fontSize: '18px',
        fontFamily: 'var(--font-serif)',
    };

    const textStyle: React.CSSProperties = {
        margin: 0,
        color: 'var(--text-primary)',
    };

    const resolutionStyle: React.CSSProperties = {
        margin: 0,
        color: 'var(--text-secondary)',
        fontSize: '14px',
        backgroundColor: 'var(--surface)',
        padding: 'var(--space-2)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border-color)',
    };

    return (
        <div style={containerStyle}>
            <h4 style={titleStyle}>{title}</h4>
            <p style={textStyle}>{message}</p>
            <div style={resolutionStyle}>
                <strong>How to fix:</strong> {resolution}
            </div>
        </div>
    );
};
