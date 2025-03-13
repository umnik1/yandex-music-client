/**
 * Содержимое очереди, на основе чего она построена (плейлист, радио, ...)
 */
export type QueueContext = {
    /**
     * Уникальный идентификатор типа содержимого (плейлиста, альбома и т.д.). При `type` равным `my_music` или `various` поле `id` отсутствует.
     */
    id?: string;
    /**
     * Описание содержимого (например, название плейлиста, радиостанции) - `various`, `my_music`, `radio`, `playlist`, `artist`. Тип `various` используется при прослушивании из раздела "Моя музыка" с сайта, а `my_music` с мобильных клиентов.
     */
    description?: string;
    /**
     * Тип содержимого, на основе чего построена очередь. Значение есть зачастую только когда `type` имеет значение `my_music` или `various`.
     */
    type: string;
};
