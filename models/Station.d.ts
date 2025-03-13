import type { Icon } from './Icon';
import type { Restrictions } from './Restrictions';
import type { Restrictions2 } from './Restrictions2';
import type { StationId } from './StationId';
export type Station = {
    /**
     * Уникальный идентификатор станции
     */
    id: StationId;
    /**
     * Уникальный идентификатор станции, являющейся предком текущей
     */
    parentId?: StationId;
    /**
     * Название станции
     */
    name: string;
    /**
     * Иконка станции
     */
    icon: Icon;
    /**
     * Иконка станции
     */
    mtsIcon: Icon;
    /**
     * Ссылка на полное изображение
     */
    fullImageUrl?: string;
    /**
     * Ссылка на полную иконку
     */
    mtsFullImageUrl?: string;
    /**
     * Категория (тип) станции
     */
    idForFrom?: string;
    /**
     * Ограничения для настроек станции старого формата
     */
    restrictions?: Restrictions;
    /**
     * Ограничения для настроек станции
     */
    restrictions2?: Restrictions2;
};
