import type { Icon } from './Icon';
export type Genre = {
    /**
     * Уникальный идентификатор жанра
     */
    id: string;
    /**
     * Вес TODO (возможно, чем выше показатель, тем больше нравится пользователю)
     */
    weight: number;
    composerTop: boolean;
    /**
     * Заголовок жанра
     */
    title: string;
    /**
     * Словарь заголовков на разных языках, где ключ - язык
     */
    titles: Record<string, {
        title: string;
        fullTitle: string;
    }>;
    /**
     * Изображение жанра
     */
    images: Record<string, string>;
    /**
     * Показывать в меню
     */
    showInMenu: boolean;
    /**
     * Список регионов в которых отображается жанр в списках
     */
    showInRegions?: Array<number>;
    /**
     * Полный заголовок
     */
    fullTitle?: string;
    /**
     * Часть ссылки на жанр для открытия в браузере
     */
    urlPart?: string;
    /**
     * Цвет фона изображения
     */
    color?: string;
    /**
     * Иконка радио жанра
     */
    radioIcon?: Icon;
    /**
     * Поджанры текущего жанра музыки
     */
    subGenres?: Genre;
    /**
     * В каких регионах скрывать жанр
     */
    hideInRegions?: Array<number>;
};
