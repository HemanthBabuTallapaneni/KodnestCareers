import React from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { EmptyState } from '../components/EmptyState';

export const Dashboard: React.FC = () => {
    return (
        <div>
            <ContextHeader
                headline="Dashboard"
                subtext="Overview of your active matches."
            />
            <EmptyState
                title="No jobs yet."
                description="In the next step, you will load a realistic dataset."
                actionLabel="Load Dataset"
                onAction={() => alert('Dataset loading will be implemented next.')}
            />
        </div>
    );
};

