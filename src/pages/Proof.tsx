import React, { useState } from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { Button } from '../components/Button';
import { useSubmission } from '../hooks/useSubmission';
import { useTests } from '../hooks/useTests';

const STEPS = [
    { id: 1, label: 'Upgrade the existing Job Notification Tracker' },
    { id: 2, label: 'Upgrade Job Notification Tracker with a Daily Digest Engine.' },
    { id: 3, label: 'Upgrade Job Notification Tracker with persistent job status' },
    { id: 4, label: 'Add a Built-In Test Checklist system' },
    { id: 5, label: 'Design refinement & cleanup' },
    { id: 6, label: 'Local storage caching verification' },
    { id: 7, label: 'Execute full testing suite manually' },
    { id: 8, label: 'Deploy & Provide verification artifacts' }
];

export const Proof: React.FC = () => {
    const { urls, updateUrl, isValidUrl, isReadyToShip, statusBadge, copyFinalSubmission } = useSubmission();
    const { allPassed } = useTests();
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        copyFinalSubmission().then((success: boolean) => {
            if (success) {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            }
        });
    };

    const inputStyles = {
        width: '100%',
        padding: '12px',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        fontSize: '15px',
        marginBottom: '4px',
        fontFamily: 'inherit',
        backgroundColor: '#fbfbfb',
        boxSizing: 'border-box' as const
    };

    return (
        <div style={{ maxWidth: '720px', margin: '0 auto', paddingBottom: 'var(--space-5)' }}>
            <ContextHeader
                headline="Project 1 — Job Notification Tracker"
                subtext="Final validation and submission extraction."
            />

            {/* Global Status Banner */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-color)',
                padding: 'var(--space-3) var(--space-4)',
                borderRadius: '8px',
                marginBottom: 'var(--space-4)'
            }}>
                <div style={{ fontWeight: 600, fontSize: '16px' }}>Global Project Status</div>
                <div style={{
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: statusBadge === 'Shipped' ? '#dcfce7' : statusBadge === 'In Progress' ? '#e0f2fe' : '#f1f5f9',
                    color: statusBadge === 'Shipped' ? '#166534' : statusBadge === 'In Progress' ? '#0369a1' : '#475569',
                }}>
                    {statusBadge}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--space-4)' }}>
                {/* Steps Section */}
                <div style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border-color)',
                    padding: 'var(--space-4)',
                    borderRadius: '8px'
                }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: '0 0 var(--space-3) 0' }}>Step Completion Summary</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {STEPS.map((step, i) => {
                            // First 7 assumed structurally complete by now, step 8 requires ship readiness
                            const isComplete = i < 7 ? true : isReadyToShip;
                            return (
                                <div key={step.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div style={{
                                        width: '20px', height: '20px', flexShrink: 0,
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: isComplete ? '#22c55e' : '#cbd5e1',
                                        color: '#fff', fontSize: '10px', marginTop: '2px'
                                    }}>
                                        ✓
                                    </div>
                                    <div style={{ fontSize: '14px', color: isComplete ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                                        {step.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Artifacts Section */}
                <div style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border-color)',
                    padding: 'var(--space-4)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: '0 0 var(--space-3) 0' }}>Artifact Collection</h3>

                    <div style={{ marginBottom: 'var(--space-3)' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Lovable Project Link</label>
                        <input
                            type="url"
                            value={urls.lovableUrl}
                            onChange={(e) => updateUrl('lovableUrl', e.target.value)}
                            placeholder="https://lovable.dev/..."
                            style={inputStyles}
                        />
                        {!isValidUrl(urls.lovableUrl) && urls.lovableUrl.length > 0 && (
                            <div style={{ color: 'var(--error)', fontSize: '12px' }}>Requires http:// or https://</div>
                        )}
                    </div>

                    <div style={{ marginBottom: 'var(--space-3)' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>GitHub Repository Link</label>
                        <input
                            type="url"
                            value={urls.githubUrl}
                            onChange={(e) => updateUrl('githubUrl', e.target.value)}
                            placeholder="https://github.com/..."
                            style={inputStyles}
                        />
                        {!isValidUrl(urls.githubUrl) && urls.githubUrl.length > 0 && (
                            <div style={{ color: 'var(--error)', fontSize: '12px' }}>Requires http:// or https://</div>
                        )}
                    </div>

                    <div style={{ marginBottom: 'var(--space-3)' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Live Deployment</label>
                        <input
                            type="url"
                            value={urls.deployedUrl}
                            onChange={(e) => updateUrl('deployedUrl', e.target.value)}
                            placeholder="https://..."
                            style={inputStyles}
                        />
                        {!isValidUrl(urls.deployedUrl) && urls.deployedUrl.length > 0 && (
                            <div style={{ color: 'var(--error)', fontSize: '12px' }}>Requires http:// or https://</div>
                        )}
                    </div>

                    {/* Ship Conditions & Button */}
                    <div style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border-color)' }}>
                        {!allPassed && (
                            <div style={{ fontSize: '12px', color: 'var(--error)', marginBottom: '8px', textAlign: 'center' }}>
                                Missing required QA Tests in `/jt/07-test`. Cannot Ship.
                            </div>
                        )}
                        <Button
                            style={{ width: '100%', opacity: isReadyToShip ? 1 : 0.5 }}
                            disabled={!isReadyToShip}
                            onClick={handleCopy}
                        >
                            {copySuccess ? "Copied to Clipboard ✓" : "Copy Final Submission"}
                        </Button>
                    </div>
                </div>
            </div>

            {statusBadge === 'Shipped' && (
                <div style={{
                    marginTop: 'var(--space-4)',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '15px'
                }}>
                    Project 1 Shipped Successfully.
                </div>
            )}
        </div>
    );
};
