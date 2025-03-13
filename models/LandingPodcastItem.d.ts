import type { Album } from './Album';
export type LandingPodcastItem = {
    type: string;
    description: string;
    descriptionFormatted: string;
    lastUpdated: string;
    data: {
        podcast: Album;
        description: string;
        descriptionFormatted: string;
        lastUpdated: string;
    };
};
