import React from 'react';

interface ScoreBadgeProps {
    score: number;
}

export const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let bgColor = 'var(--text-secondary)'; // Subtle grey (<40)
    let textColor = '#ffffff';

    if (score >= 80) {
        bgColor = 'var(--success)'; // Green
    } else if (score >= 60) {
        bgColor = 'var(--warning)'; // Amber
    } else if (score >= 40) {
        bgColor = 'var(--border-color)'; // Neutral
        textColor = 'var(--text-primary)';
    } else {
        bgColor = '#e5e5e5'; // Subtle grey
        textColor = 'var(--text-secondary)';
    }

    const badgeStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 700,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: 'var(--font-sans)',
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Match</span>
            <span style={badgeStyle}>{score}%</span>
        </div>
    );
};
