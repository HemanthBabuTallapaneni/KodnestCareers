import React from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { EmptyState } from '../components/EmptyState';

export const Saved: React.FC = () => {
    return (
        <div>
            <ContextHeader
                headline="Saved Jobs"
                subtext="Your personal vault of high-signal opportunities."
            />
            <EmptyState
                title="Nothing saved yet."
                description="When you discover a role that matches your criteria exactly, save it here to track your application progress."
            />
        </div>
    );
};

