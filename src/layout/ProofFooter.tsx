import React from 'react';

interface ProofFooterProps {
    uiBuilt: boolean;
    logicWorking: boolean;
    testPassed: boolean;
    deployed: boolean;
}

export const ProofFooter: React.FC<ProofFooterProps> = ({
    uiBuilt,
    logicWorking,
    testPassed,
    deployed,
}) => {
    const containerStyle: React.CSSProperties = {
        borderTop: '1px solid var(--border-color)',
        padding: 'var(--space-3) 0',
        marginTop: 'var(--space-5)',
        display: 'flex',
        gap: 'var(--space-4)',
        color: 'var(--text-secondary)',
        fontSize: '14px',
    };

    const itemStyle = (checked: boolean): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
        color: checked ? 'var(--text-primary)' : 'var(--text-secondary)',
    });

    const checkStyle = (checked: boolean): React.CSSProperties => ({
        color: checked ? 'var(--success)' : 'var(--border-color)',
        fontSize: '18px',
    });

    const CheckboxItem = ({ label, checked }: { label: string; checked: boolean }) => (
        <div style={itemStyle(checked)}>
            <span style={checkStyle(checked)}>{checked ? '☑' : '☐'}</span>
            <span>{label}</span>
        </div>
    );

    return (
        <footer style={containerStyle}>
            <CheckboxItem label="UI Built" checked={uiBuilt} />
            <CheckboxItem label="Logic Working" checked={logicWorking} />
            <CheckboxItem label="Test Passed" checked={testPassed} />
            <CheckboxItem label="Deployed" checked={deployed} />
        </footer>
    );
};
