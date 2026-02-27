import React from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { useTests, TEST_KEYS } from '../hooks/useTests';
import { Button } from '../components/Button';

export const TestChecklist: React.FC = () => {
    const { tests, toggleTest, resetTests, passedCount, totalCount, allPassed } = useTests();

    return (
        <div style={{ maxWidth: '640px', margin: '0 auto', paddingBottom: 'var(--space-5)' }}>
            <ContextHeader
                headline="Quality Assurance Verification"
                subtext="Built-in testing matrix for verifying release requirements."
            />

            <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)', borderBottom: '1px solid var(--border-color)', paddingBottom: 'var(--space-3)' }}>
                    <div>
                        <h2 style={{ margin: '0 0 8px 0', fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--text-primary)' }}>
                            Tests Passed: {passedCount} / {totalCount}
                        </h2>
                        {!allPassed && (
                            <div style={{ color: 'var(--error)', fontSize: '14px', fontWeight: 500 }}>
                                Resolve all issues before shipping.
                            </div>
                        )}
                        {allPassed && (
                            <div style={{ color: 'var(--success)', fontSize: '14px', fontWeight: 500 }}>
                                Ready for deployment.
                            </div>
                        )}
                    </div>
                    <Button variant="secondary" onClick={resetTests}>
                        Reset Test Status
                    </Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {TEST_KEYS.map((testName) => (
                        <label
                            key={testName}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                cursor: 'pointer',
                                padding: '8px',
                                borderRadius: '4px',
                                transition: 'background-color var(--transition-speed)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--border-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <input
                                type="checkbox"
                                checked={tests[testName]}
                                onChange={() => toggleTest(testName)}
                                style={{
                                    marginTop: '4px',
                                    width: '18px',
                                    height: '18px',
                                    accentColor: 'var(--accent)',
                                    cursor: 'pointer'
                                }}
                            />
                            <div style={{
                                fontSize: '16px',
                                color: tests[testName] ? 'var(--text-secondary)' : 'var(--text-primary)',
                                textDecoration: tests[testName] ? 'line-through' : 'none',
                                transition: 'all var(--transition-speed)'
                            }}>
                                {testName}
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => window.location.href = '/jt/08-ship'}
                    disabled={!allPassed}
                    style={{ opacity: allPassed ? 1 : 0.5 }}
                >
                    Proceed to Ship →
                </Button>
            </div>
        </div>
    );
};
