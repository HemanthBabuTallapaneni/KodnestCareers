import React from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Button } from '../components/Button';

export const Settings: React.FC = () => {
    return (
        <div>
            <ContextHeader
                headline="Settings"
                subtext="Define your tracking parameters. We use these to filter the noise."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '720px' }}>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <Input
                            label="Role Keywords"
                            placeholder="e.g. Senior Frontend Engineer, React, Staff"
                        />

                        <Input
                            label="Preferred Locations"
                            placeholder="e.g. New York, San Francisco, Remote"
                        />

                        <Select
                            label="Mode"
                            options={[
                                { value: 'remote', label: 'Remote' },
                                { value: 'hybrid', label: 'Hybrid' },
                                { value: 'onsite', label: 'Onsite' },
                                { value: 'any', label: 'Any' },
                            ]}
                        />

                        <Select
                            label="Experience Level"
                            options={[
                                { value: 'junior', label: 'Junior (1-3 years)' },
                                { value: 'mid', label: 'Mid-Level (3-5 years)' },
                                { value: 'senior', label: 'Senior (5-8 years)' },
                                { value: 'staff', label: 'Staff/Principal (8+ years)' },
                            ]}
                        />

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
                            <Button>Save Settings</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
