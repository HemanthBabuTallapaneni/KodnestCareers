import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-1)',
        width: '100%',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '14px',
        color: 'var(--text-secondary)',
        fontWeight: 500,
    };

    const inputStyle: React.CSSProperties = {
        padding: '12px var(--space-2)',
        borderRadius: 'var(--radius)',
        border: `1px solid ${error ? 'var(--accent)' : 'var(--border-color)'}`,
        backgroundColor: 'var(--surface)',
        color: 'var(--text-primary)',
        fontSize: '16px',
        fontFamily: 'var(--font-sans)',
        transition: 'var(--transition)',
        outline: 'none',
    };

    const errorStyle: React.CSSProperties = {
        color: 'var(--accent)',
        fontSize: '12px',
        marginTop: '4px',
    };

    return (
        <div style={containerStyle}>
            {label && <label style={labelStyle}>{label}</label>}
            <input
                style={{ ...inputStyle, ...style }}
                onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-primary)';
                }}
                onBlur={(e) => {
                    e.currentTarget.style.borderColor = error ? 'var(--accent)' : 'var(--border-color)';
                }}
                {...props}
            />
            {error && <span style={errorStyle}>{error}</span>}
        </div>
    );
};
