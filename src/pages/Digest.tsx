import React from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { EmptyState } from '../components/EmptyState';

export const Digest: React.FC = () => {
    return (
        <div>
            <ContextHeader
                headline="Email Digest"
                subtext="Your daily summary configuration."
            />
            <EmptyState
                title="Daily summaries coming soon."
                description="Soon, you will be able to receive a single, precision-matched email every morning at 9AM featuring only the highest quality roles."
            />
        </div>
    );
};

