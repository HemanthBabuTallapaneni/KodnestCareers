import React, { useEffect, useState } from 'react';

export interface ToastMessage {
    id: string;
    message: string;
}

interface ToastContainerProps {
    toasts: ToastMessage[];
    removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            zIndex: 9999,
            pointerEvents: 'none'
        }}>
            {toasts.map(toast => (
                <Toast key={toast.id} toast={toast} removeToast={removeToast} />
            ))}
        </div>
    );
};

const Toast: React.FC<{ toast: ToastMessage, removeToast: (id: string) => void }> = ({ toast, removeToast }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        const timerIn = setTimeout(() => setIsVisible(true), 50);
        // Trigger exit animation and removal
        const timerOut = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => removeToast(toast.id), 300); // Wait for transition
        }, 3000);

        return () => {
            clearTimeout(timerIn);
            clearTimeout(timerOut);
        };
    }, [toast.id, removeToast]);

    return (
        <div style={{
            backgroundColor: '#111111',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transform: `translateY(${isVisible ? '0' : '20px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'auto'
        }}>
            {toast.message}
        </div>
    );
};
