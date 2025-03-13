import type { PlaylistId } from './PlaylistId';
import type { Tag } from './Tag';
/**
 * Класс, представляющий тег и его плейлисты
 */
export type TagResult = {
    tag?: Tag;
    ids?: Array<PlaylistId>;
};
