import React from 'react';

interface MainLayoutProps {
    primaryWorkspace: React.ReactNode;
    secondaryPanel: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ primaryWorkspace, secondaryPanel }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start',
        width: '100%',
    };

    const primaryStyle: React.CSSProperties = {
        flex: '0 0 70%',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
    };

    const secondaryStyle: React.CSSProperties = {
        flex: '0 0 calc(30% - var(--space-4))',
        width: 'calc(30% - var(--space-4))',
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-3)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        position: 'sticky',
        top: 'var(--space-4)',
    };

    return (
        <div style={containerStyle}>
            <div style={primaryStyle}>
                {primaryWorkspace}
            </div>
            <aside style={secondaryStyle}>
                {secondaryPanel}
            </aside>
        </div>
    );
};
