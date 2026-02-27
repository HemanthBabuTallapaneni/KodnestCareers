import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(17, 17, 17, 0.4)', // Strict matching to text-primary
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: 'var(--space-3)',
    };

    const contentStyle: React.CSSProperties = {
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius)',
        width: '100%',
        maxWidth: '640px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    };

    const headerStyle: React.CSSProperties = {
        padding: 'var(--space-3)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const titleStyle: React.CSSProperties = {
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        margin: 0,
        color: 'var(--text-primary)',
    };

    const bodyStyle: React.CSSProperties = {
        padding: 'var(--space-4)',
        overflowY: 'auto',
    };

    return (
        <div style={overlayStyle} onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    <h2 style={titleStyle}>{title}</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            fontSize: '24px',
                            lineHeight: 1,
                            cursor: 'pointer',
                            color: 'var(--text-secondary)'
                        }}
                    >
                        &times;
                    </button>
                </div>
                <div style={bodyStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
};
