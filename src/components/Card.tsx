import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, style, ...props }) => {
    const cardStyle: React.CSSProperties = {
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-3)',
        width: '100%',
        // Explicitly NO drop shadows as requested
    };

    return (
        <div style={{ ...cardStyle, ...style }} {...props}>
            {children}
        </div>
    );
};
