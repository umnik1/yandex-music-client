import type { QueueContext } from './QueueContext';
import type { QueueTrack } from './QueueTrack';
/**
 * Очередь треков в списке очередей устройств
 */
export type QueueItem = {
    /**
     * Уникальный идентификатор очереди
     */
    id: string;
    context: QueueContext;
    modified: string;
    /**
     * Поле присутствует, только при запросе очереди по идентификатору
     */
    tracks?: Array<QueueTrack>;
    /**
     * Поле присутствует, только при запросе очереди по идентификатору
     */
    currentIndex?: number;
};
