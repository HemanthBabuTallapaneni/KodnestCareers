import { useState } from 'react';
import type { Job } from '../types/job';
import { jobsData } from '../data/jobs';
import { calculateMatchScore } from '../utils/scoring';
import { usePreferences } from './usePreferences';

export const useDigest = () => {
    const { preferences, hasPreferences } = usePreferences();

    // YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    const cacheKey = `jobTrackerDigest_${today}`;

    const [digest, setDigest] = useState<Array<Job & { matchScore?: number }> | null>(() => {
        try {
            const cached = localStorage.getItem(cacheKey);
            return cached ? JSON.parse(cached) : null;
        } catch {
            return null;
        }
    });

    const generateDigest = () => {
        if (!hasPreferences) return;

        // Score all jobs
        const scoredJobs = jobsData.map(job => ({
            ...job,
            matchScore: calculateMatchScore(job, preferences)
        }));

        // Sort: Match Score (descending), then postedDaysAgo (ascending)
        const sortedJobs = scoredJobs.sort((a, b) => {
            if (b.matchScore !== a.matchScore) {
                return (b.matchScore || 0) - (a.matchScore || 0);
            }
            return a.postedDaysAgo - b.postedDaysAgo;
        });

        // Top 10
        const top10 = sortedJobs.slice(0, 10);

        setDigest(top10);
        localStorage.setItem(cacheKey, JSON.stringify(top10));
    };

    return {
        digest,
        generateDigest,
        canGenerate: hasPreferences,
        today
    };
};
