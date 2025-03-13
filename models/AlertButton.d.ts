/**
 * кнопка со ссылкой
 */
export type AlertButton = {
    /**
     * Текст на кнопке
     */
    text?: string;
    /**
     * Цвет заднего фона (HTML)
     */
    bgColor?: string;
    /**
     * Цвет текста (HTML)
     */
    textColor?: string;
    /**
     * Ссылка, куда ведет кнопка
     */
    uri?: string;
};
