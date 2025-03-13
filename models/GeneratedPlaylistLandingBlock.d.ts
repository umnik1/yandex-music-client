import type { GeneratedPlaylist } from './GeneratedPlaylist';
export type GeneratedPlaylistLandingBlock = {
    notify: boolean;
    ready: boolean;
    type: 'playlistOfTheDay';
    data: GeneratedPlaylist;
};
