/**
 * текст трека
 */
export type Lyrics = {
    /**
     * Уникальный идентификатор текста трека.
     */
    id?: number;
    /**
     * Первые строки текст песни.
     */
    lyrics?: string;
    /**
     * Есть ли права.
     */
    hasRights?: boolean;
    /**
     * Текст песни.
     */
    fullLyrics?: string;
    /**
     * Язык текста.
     */
    textLanguage?: string;
    /**
     * Доступен ли перевод.
     */
    showTranslation?: boolean;
    /**
     * Ссылка на источник перевода. Обычно genius.com.
     */
    url?: string;
};
