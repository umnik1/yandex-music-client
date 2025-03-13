import type { Album } from './Album';
import type { Artist } from './Artist';
export type Track = {
    albums: Array<Album>;
    artists: Array<Artist>;
    available: boolean;
    availableForPremiumUsers: boolean;
    availableFullWithoutPermission: boolean;
    /**
     * Cover uri template
     */
    coverUri: string;
    durationMs: number;
    fileSize: number;
    id: string;
    lyricsAvailable: boolean;
    major: {
        id: number;
        name: string;
    };
    normalization: {
        gain: number;
        peak: number;
    };
    ogImage: string;
    previewDurationMs: number;
    realId: string;
    rememberPosition: boolean;
    storageDir: string;
    title: string;
    type: string;
};
