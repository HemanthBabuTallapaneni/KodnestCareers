import React from 'react';
import type { JobStatus } from '../types/status';

interface StatusPillProps {
    status: JobStatus;
    onChange: (status: JobStatus) => void;
}

export const StatusPill: React.FC<StatusPillProps> = ({ status, onChange }) => {
    const getColorStyle = (currentStatus: JobStatus) => {
        switch (currentStatus) {
            case 'Selected':
                return { backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#166534', border: '1px solid rgba(34, 197, 94, 0.2)' };
            case 'Rejected':
                return { backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#991B1B', border: '1px solid rgba(239, 68, 68, 0.2)' };
            case 'Applied':
                return { backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#1E40AF', border: '1px solid rgba(59, 130, 246, 0.2)' };
            case 'Not Applied':
            default:
                return { backgroundColor: 'var(--border-color)', color: 'var(--text-secondary)', border: '1px solid transparent' };
        }
    };

    const style = getColorStyle(status);

    return (
        <select
            value={status}
            onChange={(e) => onChange(e.target.value as JobStatus)}
            style={{
                ...style,
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                textAlign: 'center',
                transition: 'all var(--transition-speed)'
            }}
        >
            <option value="Not Applied">Not Applied</option>
            <option value="Applied">Applied</option>
            <option value="Rejected">Rejected</option>
            <option value="Selected">Selected</option>
        </select>
    );
};
