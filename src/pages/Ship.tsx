import React from 'react';
import { Navigate } from 'react-router-dom';
import { ContextHeader } from '../layout/ContextHeader';
import { useTests } from '../hooks/useTests';

export const Ship: React.FC = () => {
    const { allPassed } = useTests();

    // Lock Route Logic: Redirect back to test suite if not fully passed
    if (!allPassed) {
        return <Navigate to="/jt/07-test" replace />;
    }

    return (
        <div style={{ maxWidth: '640px', margin: '0 auto', paddingBottom: 'var(--space-5)' }}>
            <ContextHeader
                headline="Ship Route Unlocked"
                subtext="All critical internal functional testing passed successfully."
            />

            <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: 'var(--space-4)',
                textAlign: 'center',
                marginTop: 'var(--space-4)'
            }}>
                <div style={{
                    fontSize: '48px',
                    marginBottom: 'var(--space-3)'
                }}>
                    🚀
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', margin: '0 0 var(--space-2) 0', color: 'var(--success)' }}>
                    Ready for Deployment
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                    10 out of 10 checks verified.
                    <br />
                    The application matches specification, operates performantly across all requirements, safely isolates client-side mapping variables via `localStorage`, and adheres entirely rigorously to the UI aesthetic conventions.
                </p>
            </div>
        </div>
    );
};
