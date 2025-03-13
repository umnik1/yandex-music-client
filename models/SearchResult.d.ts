export type SearchResult = {
    /**
     * Тип результата
     */
    type: string;
    /**
     * Количество результатов
     */
    total: number;
    /**
     * Максимальное количество результатов на странице.
     */
    perPage: number;
    /**
     * Позиция блока
     */
    order: number;
};
