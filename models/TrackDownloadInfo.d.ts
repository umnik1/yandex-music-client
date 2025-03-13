/**
 * информация о вариантах загрузки трека
 */
export type TrackDownloadInfo = {
    /**
     * Кодек аудиофайла
     */
    codec: 'mp3' | 'aac';
    /**
     * Усиление
     */
    gain: boolean;
    /**
     * Предварительный просмотр
     */
    preview: string;
    /**
     * Ссылка на XML документ содержащий данные для загрузки трека
     */
    downloadInfoUrl: string;
    /**
     * Прямая ли ссылка
     */
    direct: boolean;
    /**
     * Битрейт аудиофайла в кбит/с
     */
    bitrateInKbps: number;
};
