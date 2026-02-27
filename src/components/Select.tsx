import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, style, ...props }) => {
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

    const selectStyle: React.CSSProperties = {
        padding: '12px var(--space-2)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--surface)',
        color: 'var(--text-primary)',
        fontSize: '16px',
        fontFamily: 'var(--font-sans)',
        transition: 'var(--transition)',
        outline: 'none',
        appearance: 'none', // Remove native arrow to keep it clean
        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23111111%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 16px top 50%',
        backgroundSize: '12px auto',
    };

    return (
        <div style={containerStyle}>
            {label && <label style={labelStyle}>{label}</label>}
            <select
                style={{ ...selectStyle, ...style }}
                onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-primary)';
                }}
                onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
                {...props}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
