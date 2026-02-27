import { useState, useEffect } from 'react';
import type { JobStatus, StatusUpdate } from '../types/status';

const STATUS_CACHE_KEY = 'jobTrackerStatuses';

export const useJobStatus = () => {
    const [statuses, setStatuses] = useState<Record<string, StatusUpdate>>(() => {
        try {
            const cached = localStorage.getItem(STATUS_CACHE_KEY);
            return cached ? JSON.parse(cached) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem(STATUS_CACHE_KEY, JSON.stringify(statuses));
    }, [statuses]);

    const getStatus = (jobId: string): JobStatus => {
        return statuses[jobId]?.status || 'Not Applied';
    };

    const updateStatus = (jobId: string, status: JobStatus) => {
        setStatuses(prev => ({
            ...prev,
            [jobId]: {
                status,
                updatedAt: new Date().toISOString()
            }
        }));
    };

    const getRecentUpdates = () => {
        // Return array of updates sorted by recency
        return Object.entries(statuses)
            .map(([jobId, data]) => ({ jobId, ...data }))
            .filter(update => update.status !== 'Not Applied') // Filter out if manually set back to Not Applied recently
            .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    };

    return {
        getStatus,
        updateStatus,
        getRecentUpdates
    };
};
