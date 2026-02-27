import React, { useMemo } from 'react';
import { ContextHeader } from '../layout/ContextHeader';
import { Button } from '../components/Button';
import { ScoreBadge } from '../components/ScoreBadge';
import { useDigest } from '../hooks/useDigest';
import { useJobStatus } from '../hooks/useJobStatus';
import { jobsData } from '../data/jobs';
import type { Job } from '../types/job';

export const Digest: React.FC = () => {
    const { digest, generateDigest, canGenerate, today } = useDigest();
    const { getRecentUpdates } = useJobStatus();

    // Utility: Format the digest nicely as Plain Text for clipboard/emails
    const rawTextDigest = useMemo(() => {
        if (!digest || digest.length === 0) return '';

        let text = `Top 10 Jobs For You — 9AM Digest (${today})\n\n`;
        digest.forEach((job, index) => {
            text += `${index + 1}. ${job.title} at ${job.company}\n`;
            text += `   Match: ${job.matchScore}% | Experience: ${job.experience} | Location: ${job.location}\n`;
            text += `   Apply: ${job.applyUrl}\n\n`;
        });
        text += `This digest was generated based on your preferences.`;
        return encodeURIComponent(text); // Encoded for mailto body safely
    }, [digest, today]);

    const handleCopy = () => {
        if (!digest) return;
        const text = decodeURIComponent(rawTextDigest);
        navigator.clipboard.writeText(text).then(() => {
            alert("Digest copied to clipboard!");
        });
    };

    const recentUpdates = getRecentUpdates();

    const recentUpdatesSection = recentUpdates.length > 0 && (
        <div style={{ marginTop: 'var(--space-4)', maxWidth: '640px', margin: 'var(--space-4) auto 0 auto' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: 'var(--space-2)' }}>Recent Status Updates</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {recentUpdates.map(update => {
                    const job = jobsData.find(j => j.id === update.jobId);
                    if (!job) return null;
                    return (
                        <div key={job.id} style={{ padding: 'var(--space-3)', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{job.title}</div>
                                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{job.company}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{
                                    fontWeight: 600,
                                    color: update.status === 'Selected' ? '#166534' : update.status === 'Rejected' ? '#991B1B' : '#1E40AF',
                                    marginBottom: '4px'
                                }}>
                                    {update.status}
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                    {new Date(update.updatedAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    if (!canGenerate) {
        return (
            <div>
                <ContextHeader headline="Top 10 Jobs For You — 9AM Digest" subtext="Your morning briefing." />
                <div style={{ backgroundColor: 'var(--border-color)', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Action Required</h3>
                    <div style={{ color: 'var(--text-secondary)' }}>Set preferences to generate a personalized digest.</div>
                </div>
                {recentUpdatesSection}
            </div>
        );
    }

    if (!digest) {
        return (
            <div>
                <ContextHeader headline="Top 10 Jobs For You — 9AM Digest" subtext="Your morning briefing." />
                <div style={{ padding: '40px 0', textAlign: 'center' }}>
                    <Button onClick={generateDigest}>Generate Today's 9AM Digest (Simulated)</Button>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '16px' }}>
                        Demo Mode: Daily 9AM trigger simulated manually.
                    </div>
                </div>
                {recentUpdatesSection}
            </div>
        );
    }

    if (digest.length === 0) {
        return (
            <div>
                <ContextHeader headline="Top 10 Jobs For You — 9AM Digest" subtext="Your morning briefing." />
                <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No matching roles today. Check again tomorrow.
                </div>
                {recentUpdatesSection}
            </div>
        );
    }

    // Email Style Rendering
    return (
        <div>
            <ContextHeader headline="Daily Digest" subtext="Your morning 9AM briefing." />

            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <Button variant="secondary" onClick={handleCopy}>Copy Digest to Clipboard</Button>
                <a
                    href={`mailto:?subject=My 9AM Job Digest&body=${rawTextDigest}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Button variant="secondary">Create Email Draft</Button>
                </a>
            </div>

            {/* Email Wrapper */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: 'var(--space-4)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                maxWidth: '640px',
                margin: '0 auto'
            }}>
                <div style={{ borderBottom: '2px solid var(--text-primary)', paddingBottom: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 4px 0', fontSize: '24px' }}>
                        Top 10 Jobs For You — 9AM Digest
                    </h2>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{today}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {digest.map((job: Job & { matchScore?: number }, idx) => (
                        <div key={job.id} style={{ paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--text-primary)' }}>
                                    {idx + 1}. {job.title}
                                </h3>
                                {job.matchScore !== undefined && <ScoreBadge score={job.matchScore} />}
                            </div>

                            <div style={{ fontWeight: 500, marginBottom: '4px' }}>{job.company}</div>

                            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>
                                {job.location} • {job.experience}
                            </div>

                            <a
                                href={job.applyUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: 'var(--accent)',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '14px'
                                }}
                            >
                                Apply Now →
                            </a>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: 'var(--space-4)', color: 'var(--text-secondary)', fontSize: '12px', textAlign: 'center' }}>
                    This digest was generated based on your preferences.
                </div>
            </div>

            {recentUpdatesSection}
        </div>
    );
};

