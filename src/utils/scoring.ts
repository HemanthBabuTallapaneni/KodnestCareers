import type { Job } from '../types/job';
import type { UserPreferences } from '../types/preferences';

export const calculateMatchScore = (job: Job, prefs: UserPreferences): number => {
    let score = 0;

    // Helper to split and clean comma-separated strings
    const parseList = (str: string) => str.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

    const keywords = parseList(prefs.roleKeywords);
    const locations = parseList(prefs.preferredLocations);
    const userSkills = parseList(prefs.skills);

    const jobTitleStr = job.title.toLowerCase();
    const jobDescStr = job.description.toLowerCase();
    const jobLocStr = job.location.toLowerCase();
    const jobSkillsLower = job.skills.map(s => s.toLowerCase());

    // +25 if any roleKeyword appears in job.title
    if (keywords.some(kw => jobTitleStr.includes(kw))) {
        score += 25;
    }

    // +15 if any roleKeyword appears in job.description
    if (keywords.some(kw => jobDescStr.includes(kw))) {
        score += 15;
    }

    // +15 if job.location matches preferredLocations
    if (locations.length > 0 && locations.some(loc => jobLocStr.includes(loc))) {
        score += 15;
    }

    // +10 if job.mode matches preferredMode
    if (prefs.preferredMode.includes(job.mode)) {
        score += 10;
    }

    // +10 if job.experience matches experienceLevel
    if (prefs.experienceLevel && job.experience === prefs.experienceLevel) {
        score += 10;
    }

    // +15 if overlap between job.skills and user.skills
    if (userSkills.length > 0 && userSkills.some(skill => jobSkillsLower.includes(skill))) {
        score += 15;
    }

    // +5 if postedDaysAgo <= 2
    if (job.postedDaysAgo <= 2) {
        score += 5;
    }

    // +5 if source is LinkedIn
    if (job.source === 'LinkedIn') {
        score += 5; // Note: 'LinkedIn' vs 'Linkedin' case? Data uses 'LinkedIn'
    }

    return Math.min(score, 100);
};
