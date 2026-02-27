import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '0 var(--space-4)',
    };

    const headlineStyle: React.CSSProperties = {
        fontFamily: 'var(--font-serif)',
        fontSize: '56px',
        color: 'var(--text-primary)',
        margin: `0 0 var(--space-3) 0`,
        lineHeight: 1.1,
        maxWidth: '720px',
    };

    const subtextStyle: React.CSSProperties = {
        fontSize: '20px',
        color: 'var(--text-secondary)',
        margin: `0 0 var(--space-4) 0`,
        lineHeight: 'var(--line-height)',
        maxWidth: '720px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headlineStyle}>Stop Missing The Right Jobs.</h1>
            <p style={subtextStyle}>Precision-matched job discovery delivered daily at 9AM.</p>
            <Button
                variant="primary"
                onClick={() => navigate('/settings')}
                style={{ padding: '16px 32px', fontSize: '18px' }}
            >
                Start Tracking
            </Button>
        </div>
    );
};
