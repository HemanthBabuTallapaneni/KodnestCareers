import React from 'react';
import { Button } from './Button';

interface EmptyStateProps {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, actionLabel, onAction }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-5) var(--space-3)',
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius)',
        gap: 'var(--space-3)',
    };

    const titleStyle: React.CSSProperties = {
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        color: 'var(--text-primary)',
        margin: 0,
    };

    const descStyle: React.CSSProperties = {
        color: 'var(--text-secondary)',
        maxWidth: '480px',
        margin: 0,
    };

    return (
        <div style={containerStyle}>
            <div>
                <h3 style={titleStyle}>{title}</h3>
                <p style={descStyle}>{description}</p>
            </div>
            {actionLabel && onAction && (
                <Button onClick={onAction}>{actionLabel}</Button>
            )}
        </div>
    );
};
