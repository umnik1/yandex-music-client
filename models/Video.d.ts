/**
 * Видео
 */
export type Video = {
    /**
     * Название видео
     */
    title?: string;
    /**
     * Ссылка на изображение
     */
    cover?: string;
    /**
     * Ссылка на видео
     */
    embedUrl?: string;
    /**
     * Сервис поставляющий видео
     */
    provider?: string;
    /**
     * Уникальный идентификатор видео на сервисе.
     */
    providerVideoId?: string;
    /**
     * Ссылка на видео Youtube
     */
    youtubeUrl?: string;
    /**
     * Ссылка на изображение
     */
    thumbnailUrl?: string;
    /**
     * Длительность видео в секундах
     */
    duration?: number;
    /**
     * Текст
     */
    text?: string;
    /**
     * HTML тег для встраивания в разметку страницы
     */
    htmlAutoPlayVideoPlayer?: string;
    regions?: Array<string>;
};
