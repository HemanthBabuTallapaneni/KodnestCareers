import { useState, useEffect } from 'react';
import { useTests } from './useTests';

const SUBMISSION_CACHE_KEY = 'jobTrackerSubmission';

export interface SubmissionData {
    lovableUrl: string;
    githubUrl: string;
    deployedUrl: string;
}

export const useSubmission = () => {
    const { allPassed } = useTests();
    const [urls, setUrls] = useState<SubmissionData>(() => {
        try {
            const cached = localStorage.getItem(SUBMISSION_CACHE_KEY);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch {
            // Error deserializing fallback
        }
        return {
            lovableUrl: '',
            githubUrl: '',
            deployedUrl: ''
        };
    });

    useEffect(() => {
        localStorage.setItem(SUBMISSION_CACHE_KEY, JSON.stringify(urls));
    }, [urls]);

    const updateUrl = (key: keyof SubmissionData, value: string) => {
        setUrls(prev => ({
            ...prev,
            [key]: value
        }));
    };

    // Very permissive HTTP check strictly for presence
    const isValidUrl = (url: string) => {
        if (!url) return false;
        return url.startsWith('http://') || url.startsWith('https://');
    };

    const hasAllValidUrls =
        isValidUrl(urls.lovableUrl) &&
        isValidUrl(urls.githubUrl) &&
        isValidUrl(urls.deployedUrl);

    // Core validation: Cannot be shipped unless 10/10 tests strictly pass AND valid URLs exist
    const isReadyToShip = hasAllValidUrls && allPassed;

    // Status Badge Logic
    let statusBadge: 'Not Started' | 'In Progress' | 'Shipped' = 'Not Started';
    const hasAnyInput = urls.lovableUrl.length > 0 || urls.githubUrl.length > 0 || urls.deployedUrl.length > 0;

    if (isReadyToShip) {
        statusBadge = 'Shipped';
    } else if (hasAnyInput || allPassed) {
        statusBadge = 'In Progress';
    }

    const generateTextPayload = () => {
        // Enforce the spec's exact structural formatting
        return `------------------------------------------
Job Notification Tracker — Final Submission

Lovable Project:
${urls.lovableUrl}

GitHub Repository:
${urls.githubUrl}

Live Deployment:
${urls.deployedUrl}

Core Features:
- Intelligent match scoring
- Daily digest simulation
- Status tracking
- Test checklist enforced
------------------------------------------`;
    };

    const copyFinalSubmission = () => {
        if (!isReadyToShip) return Promise.resolve(false);

        const payload = generateTextPayload();
        return navigator.clipboard.writeText(payload)
            .then(() => true)
            .catch(() => false);
    };

    return {
        urls,
        updateUrl,
        isValidUrl,
        isReadyToShip,
        statusBadge,
        copyFinalSubmission
    };
};
