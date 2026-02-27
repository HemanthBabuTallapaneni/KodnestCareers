export type JobStatus = 'Not Applied' | 'Applied' | 'Rejected' | 'Selected';

export interface StatusUpdate {
    status: JobStatus;
    updatedAt: string;
}
