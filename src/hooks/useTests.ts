import { useState, useEffect } from 'react';

const TESTS_CACHE_KEY = 'jobTrackerTests';

export const TEST_KEYS = [
    'Preferences persist after refresh',
    'Match score calculates correctly',
    '"Show only matches" toggle works',
    'Save job persists after refresh',
    'Apply opens in new tab',
    'Status update persists after refresh',
    'Status filter works correctly',
    'Digest generates top 10 by score',
    'Digest persists for the day',
    'No console errors on main pages'
] as const;

export type TestKey = typeof TEST_KEYS[number];

export const useTests = () => {
    const [tests, setTests] = useState<Record<TestKey, boolean>>(() => {
        try {
            const cached = localStorage.getItem(TESTS_CACHE_KEY);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch {
            // fallback
        }

        // Default all to false
        return TEST_KEYS.reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {} as Record<TestKey, boolean>);
    });

    useEffect(() => {
        localStorage.setItem(TESTS_CACHE_KEY, JSON.stringify(tests));
    }, [tests]);

    const toggleTest = (key: TestKey) => {
        setTests(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const resetTests = () => {
        setTests(TEST_KEYS.reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {} as Record<TestKey, boolean>));
    };

    const passedCount = Object.values(tests).filter(Boolean).length;
    const allPassed = passedCount === TEST_KEYS.length;

    return {
        tests,
        toggleTest,
        resetTests,
        passedCount,
        totalCount: TEST_KEYS.length,
        allPassed
    };
};
