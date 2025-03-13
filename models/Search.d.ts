import type { Album } from './Album';
import type { Artist } from './Artist';
import type { Best } from './Best';
import type { Playlist } from './Playlist';
import type { SearchResult } from './SearchResult';
import type { SearchType } from './SearchType';
import type { Track } from './Track';
import type { Video } from './Video';
/**
 * Результаты поиска
 */
export type Search = {
    /**
     * ID запроса
     */
    searchResultId?: string;
    /**
     * Текст запроса
     */
    text: string;
    best: Best;
    /**
     * Найденные альбомы
     */
    albums: (SearchResult & {
        results: Array<Album>;
    });
    /**
     * Найденные артисты
     */
    artists: (SearchResult & {
        results: Array<Artist>;
    });
    /**
     * Найденные альбомы
     */
    playlists: (SearchResult & {
        results: Array<Playlist>;
    });
    /**
     * Найденные треки
     */
    tracks: (SearchResult & {
        results: Array<Track>;
    });
    /**
     * Найденные видео
     */
    videos?: (SearchResult & {
        results: Array<Video>;
    });
    /**
     * Найденные подкасты
     */
    podcasts?: (SearchResult & {
        results: Array<any>;
    });
    /**
     * Найденные выпуски подкастов
     */
    podcast_episodes: (SearchResult & {
        results: Array<any>;
    });
    /**
     * Тип результата по которому искали. Доступно, при использовании параметра type.
     */
    type?: SearchType;
    /**
     * Текущая страница. Доступно, при использовании параметра type.
     */
    page?: number;
    /**
     * Результатов на странице. Доступно, при использовании параметра type.
     */
    perPage?: number;
    /**
     * Был ли исправлен запрос
     */
    misspellCorrected: boolean;
    /**
     * Оригинальный запрос
     */
    misspellOriginal?: string;
    /**
     * Было ли отключено исправление результата
     */
    nocorrect: boolean;
};
