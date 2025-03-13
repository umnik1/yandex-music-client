import type { TrackShort } from './TrackShort';
/**
 * список треков
 */
export type TracksList = {
    /**
     * Уникальный идентификатор пользователя
     */
    uid: number;
    /**
     * Актуальность данных TODO
     */
    revisions: number;
    /**
     * Список треков в укороченной версии
     */
    tracks: Array<TrackShort>;
};
