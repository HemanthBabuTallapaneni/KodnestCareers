import React from 'react';
import { Input } from './Input';
import { Select } from './Select';
import type { JobMode, JobExperience, JobSource } from '../types/job';

export interface FilterState {
    keyword: string;
    location: string;
    mode: JobMode | 'All';
    experience: JobExperience | 'All';
    source: JobSource | 'All';
    sort: 'Latest' | 'Match Score' | 'Salary';
}

interface FilterBarProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-4)',
        paddingBottom: 'var(--space-4)',
        borderBottom: '1px solid var(--border-color)',
    };

    const rowStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-3)',
    };

    return (
        <div style={containerStyle}>
            <div style={rowStyle}>
                <Input
                    placeholder="Search title, company..."
                    value={filters.keyword}
                    onChange={(e) => setFilters(prev => ({ ...prev, keyword: e.target.value }))}
                />
                <Input
                    placeholder="Location"
                    value={filters.location}
                    onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                />
            </div>
            <div style={rowStyle}>
                <Select
                    value={filters.mode}
                    onChange={(e) => setFilters(prev => ({ ...prev, mode: e.target.value as JobMode | 'All' }))}
                    options={[
                        { value: 'All', label: 'All Modes' },
                        { value: 'Remote', label: 'Remote' },
                        { value: 'Hybrid', label: 'Hybrid' },
                        { value: 'Onsite', label: 'Onsite' },
                    ]}
                />
                <Select
                    value={filters.experience}
                    onChange={(e) => setFilters(prev => ({ ...prev, experience: e.target.value as JobExperience | 'All' }))}
                    options={[
                        { value: 'All', label: 'All Experience' },
                        { value: 'Fresher', label: 'Fresher' },
                        { value: '0-1', label: '0-1 Years' },
                        { value: '1-3', label: '1-3 Years' },
                        { value: '3-5', label: '3-5 Years' },
                        { value: '5+', label: '5+ Years' },
                    ]}
                />
                <Select
                    value={filters.source}
                    onChange={(e) => setFilters(prev => ({ ...prev, source: e.target.value as JobSource | 'All' }))}
                    options={[
                        { value: 'All', label: 'All Sources' },
                        { value: 'LinkedIn', label: 'LinkedIn' },
                        { value: 'Naukri', label: 'Naukri' },
                        { value: 'Indeed', label: 'Indeed' },
                        { value: 'Wellfound', label: 'Wellfound' },
                    ]}
                />
                <Select
                    value={filters.sort}
                    onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value as 'Latest' | 'Match Score' | 'Salary' }))}
                    options={[
                        { value: 'Latest', label: 'Sort by Latest' },
                        { value: 'Match Score', label: 'Sort by Match Score' },
                        { value: 'Salary', label: 'Sort by Salary' },
                    ]}
                />
            </div>
        </div>
    );
};
