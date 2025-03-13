import type { Track } from './Track';
export type TrackItem = {
    id: number;
    playCount: number;
    recent: boolean;
    timestamp: string;
    /**
     * Null when tracks are not riched
     */
    track?: Track;
};
