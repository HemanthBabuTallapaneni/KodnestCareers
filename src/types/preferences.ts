import type { JobMode, JobExperience } from './job';

export interface UserPreferences {
    roleKeywords: string; // comma-separated
    preferredLocations: string; // comma-separated (mocking multi-select for simplicity)
    preferredMode: JobMode[];
    experienceLevel: JobExperience | '';
    skills: string; // comma-separated
    minMatchScore: number;
}
