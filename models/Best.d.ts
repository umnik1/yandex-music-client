import type { Album } from './Album';
import type { Artist } from './Artist';
import type { Playlist } from './Playlist';
import type { Track } from './Track';
import type { Video } from './Video';
/**
 * лучший результат поиска
 */
export type Best = {
    /**
     * Тип лучшего результата
     */
    type?: string;
    text?: string;
    result?: (Track | Artist | Album | Playlist | Video);
};
