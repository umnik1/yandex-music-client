import type { Cover } from './Cover';
import type { Owner } from './Owner';
import type { TrackItem } from './TrackItem';
/**
 * play list data
 */
export type Playlist = {
    playlistUuid: string;
    description: string;
    descriptionFormatted: string;
    available: boolean;
    collective: boolean;
    cover?: Cover;
    created: string;
    modified: string;
    backgroundColor: string;
    textColor: string;
    durationMs: number;
    isBanner: boolean;
    isPremiere: boolean;
    kind: number;
    ogImage?: string;
    owner: Owner;
    prerolls?: Array<any>;
    revision: number;
    snapshot: number;
    tags: Array<{
        id?: string;
        value?: string;
    }>;
    title: string;
    trackCount: number;
    uid: number;
    visibility: 'public' | 'private';
    likesCount: number;
    tracks: Array<TrackItem>;
};
