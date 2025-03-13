import type { Cover } from './Cover';
import type { Playlist } from './Playlist';
/**
 * Плейлист дня, дежавю, премьера, ...
 */
export type GeneratedPlaylist = (Playlist & {
    /**
     * Доступно для плейлиста дня
     */
    animatedCoverUri?: string;
    coverWithoutText?: Cover;
    everPlayed?: boolean;
    generatedPlaylistType?: string;
    idForFrom?: string;
    madeFor?: any;
    playCounter?: {
        description: string;
        descriptionNext: string;
        updated: boolean;
        value: number;
    };
});
