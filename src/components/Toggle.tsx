import React from 'react';

interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label }) => {
    return (
        <label style={{
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            gap: 'var(--space-2)'
        }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                style={{ display: 'none' }}
            />
            <div style={{
                position: 'relative',
                width: '36px',
                height: '20px',
                backgroundColor: checked ? 'var(--accent)' : 'var(--border-color)',
                borderRadius: '10px',
                transition: 'background-color var(--transition-speed)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '2px',
                    left: checked ? '18px' : '2px',
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    transition: 'left var(--transition-speed)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }} />
            </div>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>
                {label}
            </span>
        </label>
    );
};
