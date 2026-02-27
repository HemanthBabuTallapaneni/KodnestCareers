import React from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ContextHeader
                headline="Page Not Found"
                subtext="The page you are looking for does not exist."
            />
            <div style={{ marginTop: 'var(--space-4)' }}>
                <Button onClick={() => navigate('/dashboard')}>
                    Return to Dashboard
                </Button>
            </div>
        </div>
    );
};
