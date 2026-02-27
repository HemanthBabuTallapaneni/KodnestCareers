import { useState } from 'react';
import type { UserPreferences } from '../types/preferences';

const DEFAULT_PREFERENCES: UserPreferences = {
    roleKeywords: '',
    preferredLocations: '',
    preferredMode: [],
    experienceLevel: '',
    skills: '',
    minMatchScore: 40,
};

export const usePreferences = () => {
    const [preferences, setPreferences] = useState<UserPreferences>(() => {
        try {
            const stored = localStorage.getItem('jobTrackerPreferences');
            return stored ? JSON.parse(stored) : null; // Return null initially if not set
        } catch {
            return null;
        }
    });

    const [hasPreferences, setHasPreferences] = useState<boolean>(() => {
        return localStorage.getItem('jobTrackerPreferences') !== null;
    });

    const savePreferences = (newPrefs: UserPreferences) => {
        setPreferences(newPrefs);
        setHasPreferences(true);
        localStorage.setItem('jobTrackerPreferences', JSON.stringify(newPrefs));
    };

    return {
        preferences: preferences || DEFAULT_PREFERENCES,
        hasPreferences,
        savePreferences
    };
};
