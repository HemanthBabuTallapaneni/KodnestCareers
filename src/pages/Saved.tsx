import React, { useMemo } from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { EmptyState } from '../components/EmptyState';
import { JobCard } from '../components/JobCard';
import { jobsData } from '../data/jobs';
import { useSavedJobs } from '../hooks/useSavedJobs';

export const Saved: React.FC = () => {
    const { savedJobIds, toggleSave, isSaved } = useSavedJobs();

    const savedJobs = useMemo(() => {
        return jobsData.filter(job => savedJobIds.has(job.id));
    }, [savedJobIds]);

    return (
        <div>
            <ContextHeader
                headline="Saved Jobs"
                subtext="Your personal vault of high-signal opportunities."
            />

            {savedJobs.length === 0 ? (
                <EmptyState
                    title="Nothing saved yet."
                    description="When you discover a role that matches your criteria exactly, save it here to track your application progress."
                />
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-3)' }}>
                    {savedJobs.map(job => (
                        <JobCard
                            key={job.id}
                            job={job}
                            isSaved={isSaved(job.id)}
                            onToggleSave={toggleSave}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
