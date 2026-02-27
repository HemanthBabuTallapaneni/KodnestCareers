import React, { useState, useMemo } from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { EmptyState } from '../components/EmptyState';
import { FilterBar } from '../components/FilterBar';
import type { FilterState } from '../components/FilterBar';
import { JobCard } from '../components/JobCard';
import { jobsData } from '../data/jobs';
import { useSavedJobs } from '../hooks/useSavedJobs';

export const Dashboard: React.FC = () => {
    const { toggleSave, isSaved } = useSavedJobs();

    const [filters, setFilters] = useState<FilterState>({
        keyword: '',
        location: '',
        mode: 'All',
        experience: 'All',
        source: 'All',
        sort: 'Latest',
    });

    const filteredJobs = useMemo(() => {
        return jobsData.filter(job => {
            if (filters.keyword && !job.title.toLowerCase().includes(filters.keyword.toLowerCase()) && !job.company.toLowerCase().includes(filters.keyword.toLowerCase())) {
                return false;
            }
            if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }
            if (filters.mode !== 'All' && job.mode !== filters.mode) return false;
            if (filters.experience !== 'All' && job.experience !== filters.experience) return false;
            if (filters.source !== 'All' && job.source !== filters.source) return false;

            return true;
        }).sort((a, b) => {
            if (filters.sort === 'Latest') {
                return a.postedDaysAgo - b.postedDaysAgo;
            }
            return 0;
        });
    }, [filters]);

    return (
        <div>
            <ContextHeader
                headline="Dashboard"
                subtext="Overview of your active matches."
            />

            <FilterBar filters={filters} setFilters={setFilters} />

            {filteredJobs.length === 0 ? (
                <EmptyState
                    title="No jobs match your search."
                    description="Try adjusting your filters or expanding your search criteria."
                />
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-3)' }}>
                    {filteredJobs.map(job => (
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
