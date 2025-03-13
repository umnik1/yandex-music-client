/**
 * видеоклипы
 */
export type VideoSupplement = {
    /**
     * URL на обложку видео.
     */
    cover?: string;
    /**
     * Сервис поставляющий видео.
     */
    provider?: string;
    /**
     * Название видео.
     */
    title?: string;
    /**
     * Уникальный идентификатор видео на сервисе.
     */
    providerVideoId?: string;
    /**
     * URL на видео.
     */
    url?: string;
    /**
     * URL на видео, находящегося на серверах Яндекса.
     */
    embedUrl?: string;
    /**
     * HTML тег для встраивания видео.
     */
    embed?: string;
};
