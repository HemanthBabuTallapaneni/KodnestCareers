import { useState, useEffect } from 'react';

export const useSavedJobs = () => {
    const [savedJobIds, setSavedJobIds] = useState<Set<string>>(() => {
        try {
            const stored = localStorage.getItem('savedJobIds');
            return stored ? new Set(JSON.parse(stored)) : new Set<string>();
        } catch {
            return new Set<string>();
        }
    });

    useEffect(() => {
        localStorage.setItem('savedJobIds', JSON.stringify(Array.from(savedJobIds)));
    }, [savedJobIds]);

    const toggleSave = (id: string) => {
        setSavedJobIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const isSaved = (id: string) => savedJobIds.has(id);

    return { savedJobIds, toggleSave, isSaved };
};
