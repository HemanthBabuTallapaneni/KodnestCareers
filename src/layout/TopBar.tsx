import React from 'react';

interface TopBarProps {
    currentStep: number;
    totalSteps: number;
    status: 'Not Started' | 'In Progress' | 'Shipped';
}

export const TopBar: React.FC<TopBarProps> = ({ currentStep, totalSteps, status }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--space-3) var(--space-4)',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--surface)',
    };

    const brandStyle: React.CSSProperties = {
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        fontSize: '20px',
        color: 'var(--text-primary)',
    };

    const progressStyle: React.CSSProperties = {
        color: 'var(--text-secondary)',
        fontSize: '14px',
        fontWeight: 500,
    };

    const getStatusColor = () => {
        switch (status) {
            case 'Shipped': return 'var(--success)';
            case 'In Progress': return 'var(--warning)';
            case 'Not Started': return 'var(--text-secondary)';
            default: return 'var(--text-secondary)';
        }
    };

    const badgeStyle: React.CSSProperties = {
        padding: '4px 12px',
        borderRadius: '16px',
        fontSize: '12px',
        fontWeight: 600,
        backgroundColor: 'var(--surface)',
        border: `1px solid ${getStatusColor()}`,
        color: getStatusColor(),
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    };

    return (
        <header style={containerStyle}>
            <div style={brandStyle}>Job Notification App</div>
            <div style={progressStyle}>Step {currentStep} / {totalSteps}</div>
            <div style={badgeStyle}>{status}</div>
        </header>
    );
};
