import type { Lyrics } from './Lyrics';
import type { VideoSupplement } from './VideoSupplement';
/**
 * дополнительная информация о треке
 */
export type Supplement = {
    /**
     * Уникальный идентификатор дополнительной информации.
     */
    id?: number;
    /**
     * Текст песни.
     */
    lyrics?: Lyrics;
    /**
     * Видео.
     */
    videos?: VideoSupplement;
    /**
     * Доступно ли радио.
     */
    radioIsAvailable?: boolean;
    /**
     * Полное описание эпизода подкаста.
     */
    description?: string;
};
