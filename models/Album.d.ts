import type { Artist } from './Artist';
import type { Track } from './Track';
export type Album = {
    /**
     * Идентификатор альбома
     */
    id: number;
    /**
     * Ошибка получения альбома
     */
    error?: string | null;
    /**
     * Название альбома
     */
    title: string;
    /**
     * Тип альбома
     */
    type: 'single' | 'podcast';
    /**
     * Мета тип
     */
    metaType: 'single' | 'podcast' | 'music';
    /**
     * Год релиза
     */
    year: number;
    /**
     * Дата релиза в формате ISO 8601
     */
    releaseDate: string;
    /**
     * Ссылка на обложку
     */
    coverUri: string;
    /**
     * Ссылка на превью Open Graph
     */
    ogImage: string;
    /**
     * Жанр музыки
     */
    genre: string;
    buy: Array<any>;
    /**
     * Количество треков.
     */
    trackCount: number;
    /**
     * Является ли альбом новым
     */
    recent: boolean;
    /**
     * Популярен ли альбом у слушателей
     */
    veryImportant: boolean;
    /**
     * Артисты
     */
    artists: Array<Artist>;
    /**
     * Лейблы
     */
    labels: Array<{
        id?: number;
        name?: string;
    }>;
    /**
     * Доступен ли альбом
     */
    available: boolean;
    /**
     * Доступен ли альбом для пользователей с подпиской
     */
    availableForPremiumUsers: boolean;
    /**
     * Доступен ли альбом из приложения для телефона
     */
    availableForMobile: boolean;
    /**
     * Доступен ли альбом частично для пользователей без подписки
     */
    availablePartially: boolean;
    /**
     * ID лучших треков альбома
     */
    bests: Array<number>;
    /**
     * Прероллы
     */
    prerolls: Array<any>;
    /**
     * Треки альбома, разделенные по дискам.
     */
    volumes: Array<Array<Track>> | null;
};
