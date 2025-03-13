import type { Track } from './Track';
/**
 * список похожих треков на другой трек
 */
export type SimilarTracks = {
    /**
     * трек
     */
    track?: Track;
    /**
     * Похожие треки
     */
    similarTracks?: Array<Track>;
};
