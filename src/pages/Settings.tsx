import React, { useState, useEffect } from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Button } from '../components/Button';
import { usePreferences } from '../hooks/usePreferences';
import type { UserPreferences } from '../types/preferences';
import type { JobMode, JobExperience } from '../types/job';

export const Settings: React.FC = () => {
    const { preferences, savePreferences } = usePreferences();
    const [formData, setFormData] = useState<UserPreferences>(preferences);
    const [savedState, setSavedState] = useState(false);

    useEffect(() => {
        setFormData(preferences);
    }, [preferences]);

    const handleSave = () => {
        savePreferences(formData);
        setSavedState(true);
        setTimeout(() => setSavedState(false), 2000);
    };

    const handleModeToggle = (mode: JobMode) => {
        setFormData(prev => {
            const newModes = prev.preferredMode.includes(mode)
                ? prev.preferredMode.filter(m => m !== mode)
                : [...prev.preferredMode, mode];
            return { ...prev, preferredMode: newModes };
        });
    };

    return (
        <div>
            <ContextHeader
                headline="Settings"
                subtext="Define your tracking parameters. We use these to mathematically filter the noise."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '720px' }}>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <Input
                            label="Role Keywords (comma-separated)"
                            placeholder="e.g. Frontend Engineer, React, Full Stack"
                            value={formData.roleKeywords}
                            onChange={(e) => setFormData({ ...formData, roleKeywords: e.target.value })}
                        />

                        <Input
                            label="Preferred Locations (comma-separated)"
                            placeholder="e.g. Bangalore, Remote, Chennai"
                            value={formData.preferredLocations}
                            onChange={(e) => setFormData({ ...formData, preferredLocations: e.target.value })}
                        />

                        <Input
                            label="Your Skills (comma-separated)"
                            placeholder="e.g. Typescript, Next.js, Java"
                            value={formData.skills}
                            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        />

                        <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                                Preferred Mode
                            </label>
                            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                                {(['Remote', 'Hybrid', 'Onsite'] as JobMode[]).map(mode => (
                                    <label key={mode} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.preferredMode.includes(mode)}
                                            onChange={() => handleModeToggle(mode)}
                                        />
                                        {mode}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <Select
                            label="Experience Level"
                            value={formData.experienceLevel}
                            onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as JobExperience | '' })}
                            options={[
                                { value: '', label: 'Any' },
                                { value: 'Fresher', label: 'Fresher' },
                                { value: '0-1', label: '0-1 Years' },
                                { value: '1-3', label: '1-3 Years' },
                                { value: '3-5', label: '3-5 Years' },
                                { value: '5+', label: '5+ Years' },
                            ]}
                        />

                        <div>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                                Minimum Match Score Threshold: {formData.minMatchScore}%
                            </label>
                            <input
                                type="range"
                                min="0" max="100" step="5"
                                value={formData.minMatchScore}
                                onChange={(e) => setFormData({ ...formData, minMatchScore: parseInt(e.target.value, 10) })}
                                style={{ width: '100%' }}
                            />
                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                Jobs scoring below this threshold will be hidden if the dashboard toggle is active.
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
                            <Button onClick={handleSave}>
                                {savedState ? 'Saved Successfully!' : 'Save Parameters'}
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
