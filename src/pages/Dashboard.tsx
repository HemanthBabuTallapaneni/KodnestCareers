import React, { useState, useMemo } from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { EmptyState } from '../components/EmptyState';
import { FilterBar } from '../components/FilterBar';
import type { FilterState } from '../components/FilterBar';
import { JobCard } from '../components/JobCard';
import { jobsData } from '../data/jobs';
import { useSavedJobs } from '../hooks/useSavedJobs';
import { usePreferences } from '../hooks/usePreferences';
import { calculateMatchScore } from '../utils/scoring';
import { Toggle } from '../components/Toggle';
import { useJobStatus } from '../hooks/useJobStatus';
import { useToast } from '../hooks/useToast';
import { ToastContainer } from '../components/Toast';
import type { JobStatus } from '../types/status';

export const Dashboard: React.FC = () => {
    const { toggleSave, isSaved } = useSavedJobs();
    const { preferences, hasPreferences } = usePreferences();
    const { getStatus, updateStatus } = useJobStatus();
    const { toasts, showToast, removeToast } = useToast();
    const [showOnlyThreshold, setShowOnlyThreshold] = useState(false);

    const [filters, setFilters] = useState<FilterState>({
        keyword: '',
        location: '',
        mode: 'All',
        experience: 'All',
        source: 'All',
        status: 'All',
        sort: 'Latest',
    });

    const handleStatusChange = (jobId: string, newStatus: JobStatus) => {
        updateStatus(jobId, newStatus);
        showToast(`Status updated: ${newStatus}`);
    };

    // Score jobs and memoize
    const scoredJobs = useMemo(() => {
        return jobsData.map(job => ({
            ...job,
            matchScore: hasPreferences ? calculateMatchScore(job, preferences) : undefined
        }));
    }, [hasPreferences, preferences]);

    const filteredJobs = useMemo(() => {
        return scoredJobs.filter(job => {
            // Apply Threshold filtering
            if (showOnlyThreshold && job.matchScore !== undefined && job.matchScore < preferences.minMatchScore) {
                return false;
            }

            if (filters.keyword && !job.title.toLowerCase().includes(filters.keyword.toLowerCase()) && !job.company.toLowerCase().includes(filters.keyword.toLowerCase())) {
                return false;
            }
            if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }
            if (filters.mode !== 'All' && job.mode !== filters.mode) return false;
            if (filters.experience !== 'All' && job.experience !== filters.experience) return false;
            if (filters.source !== 'All' && job.source !== filters.source) return false;

            const currentStatus = getStatus(job.id);
            if (filters.status !== 'All' && currentStatus !== filters.status) return false;

            return true;
        }).sort((a, b) => {
            if (filters.sort === 'Match Score') {
                return (b.matchScore || 0) - (a.matchScore || 0);
            }
            if (filters.sort === 'Latest') {
                return a.postedDaysAgo - b.postedDaysAgo;
            }
            if (filters.sort === 'Salary') {
                // Extremely basic extraction (e.g. "10-15 LPA" -> 10)
                const valA = parseInt(a.salaryRange.replace(/\D/g, '').substring(0, 2)) || 0;
                const valB = parseInt(b.salaryRange.replace(/\D/g, '').substring(0, 2)) || 0;
                return valB - valA;
            }
            return 0;
        });
    }, [scoredJobs, filters, showOnlyThreshold, preferences.minMatchScore, getStatus]);

    return (
        <div>
            <ContextHeader
                headline="Dashboard"
                subtext="Overview of your active matches."
            />

            {!hasPreferences && (
                <div style={{ backgroundColor: 'var(--border-color)', padding: '16px', borderRadius: '8px', marginBottom: 'var(--space-3)' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Set your preferences to activate intelligent matching.</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Navigate to the Settings tab to define your parameters.</div>
                </div>
            )}

            <FilterBar filters={filters} setFilters={setFilters} />

            {hasPreferences && (
                <div style={{ marginBottom: 'var(--space-3)' }}>
                    <Toggle
                        label="Show only jobs above my threshold"
                        checked={showOnlyThreshold}
                        onChange={setShowOnlyThreshold}
                    />
                </div>
            )}

            {filteredJobs.length === 0 ? (
                <EmptyState
                    title="No roles match your criteria."
                    description="Adjust filters or lower threshold."
                />
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-3)' }}>
                    {filteredJobs.map(job => (
                        <JobCard
                            key={job.id}
                            job={job}
                            matchScore={job.matchScore}
                            isSaved={isSaved(job.id)}
                            onToggleSave={toggleSave}
                            status={getStatus(job.id)}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </div>
            )}

            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </div>
    );
};
