import type { Track } from './Track';
/**
 * рекомендации для плейлиста
 */
export type PlaylistRecommendations = {
    /**
     * Уникальный идентификатор партии треков
     */
    batch_id?: string;
    tracks?: Array<Track>;
};
