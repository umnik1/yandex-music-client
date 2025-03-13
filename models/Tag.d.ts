/**
 * Тег
 */
export type Tag = {
    /**
     * Уникальный идентификатор тега
     */
    id: string;
    /**
     * Значение тега (название в lower case)
     */
    value: string;
    /**
     * Название тега (отображаемое)
     */
    name: string;
    /**
     * Описание тега для OpenGraph
     */
    ogDescription: string;
    /**
     * Ссылка на изображение для OpenGraph
     */
    ogImage?: string;
};
