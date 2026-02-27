import React, { useState } from 'react';
import type { Job } from '../types/job';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { Modal } from './Modal';
import { ScoreBadge } from './ScoreBadge';

interface JobCardProps {
    job: Job;
    isSaved: boolean;
    onToggleSave: (id: string) => void;
    matchScore?: number;
}

export const JobCard: React.FC<JobCardProps> = ({ job, isSaved, onToggleSave, matchScore }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const headerRowStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 'var(--space-2)',
        marginBottom: 'var(--space-1)',
    };

    const titleStyle: React.CSSProperties = {
        fontFamily: 'var(--font-serif)',
        fontSize: '20px',
        margin: 0,
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
    };

    const compStyle: React.CSSProperties = {
        color: 'var(--text-primary)',
        fontWeight: 500,
        fontSize: '16px',
        marginTop: 'var(--space-1)',
    };

    const metaStyle: React.CSSProperties = {
        color: 'var(--text-secondary)',
        fontSize: '14px',
        marginTop: '4px',
    };

    return (
        <>
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div>
                    <div style={headerRowStyle}>
                        <h3 style={titleStyle}>
                            {job.title}
                        </h3>
                        {matchScore !== undefined ? <ScoreBadge score={matchScore} /> : <Badge variant="filled">{job.source}</Badge>}
                    </div>
                    <div style={compStyle}>{job.company}</div>
                    <div style={metaStyle}>
                        {job.location} • {job.mode} • {job.experience}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {job.skills.slice(0, 4).map(skill => (
                        <Badge key={skill}>{skill}</Badge>
                    ))}
                    {job.skills.length > 4 && <Badge>+{job.skills.length - 4} more</Badge>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
                    <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{job.salaryRange}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                            {job.postedDaysAgo === 0 ? 'Posted today' : `${job.postedDaysAgo} days ago`}
                            {matchScore !== undefined && <span style={{ marginLeft: '8px' }}>• {job.source}</span>}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                        <Button variant="secondary" onClick={() => setIsModalOpen(true)}>View</Button>
                        <Button
                            variant="secondary"
                            onClick={() => onToggleSave(job.id)}
                            style={{ color: isSaved ? 'var(--accent)' : 'inherit', borderColor: isSaved ? 'var(--accent)' : 'var(--border-color)' }}
                        >
                            {isSaved ? 'Saved' : 'Save'}
                        </Button>
                        <Button onClick={() => window.open(job.applyUrl, '_blank')}>Apply</Button>
                    </div>
                </div>
            </Card>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={job.title}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div>
                        <h4 style={{ margin: '0 0 var(--space-1) 0', fontSize: '18px' }}>{job.company}</h4>
                        <div style={{ color: 'var(--text-secondary)' }}>
                            {job.location} • {job.mode} • {job.experience}
                        </div>
                        <div style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>{job.salaryRange}</div>
                        {matchScore !== undefined && (
                            <div style={{ marginTop: 'var(--space-2)' }}>
                                <ScoreBadge score={matchScore} />
                            </div>
                        )}
                    </div>

                    <div>
                        <h5 style={{ margin: '0 0 var(--space-2) 0', fontFamily: 'var(--font-serif)', fontSize: '16px' }}>Required Skills</h5>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {job.skills.map(skill => (
                                <Badge key={skill} variant="filled">{skill}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 style={{ margin: '0 0 var(--space-2) 0', fontFamily: 'var(--font-serif)', fontSize: '16px' }}>About the Role</h5>
                        <p style={{ margin: 0, lineHeight: 'var(--line-height)', color: 'var(--text-primary)' }}>
                            {job.description}
                        </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                        <Button
                            variant="secondary"
                            onClick={() => onToggleSave(job.id)}
                            style={{ color: isSaved ? 'var(--accent)' : 'inherit', borderColor: isSaved ? 'var(--accent)' : 'var(--border-color)' }}
                        >
                            {isSaved ? 'Saved' : 'Save Bookmark'}
                        </Button>
                        <Button onClick={() => window.open(job.applyUrl, '_blank')}>Apply Now External</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
