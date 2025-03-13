import type { AlertButton } from './AlertButton';
/**
 * Блок с предупреждениями о конце подписки и подарках
 */
export type Alert = {
    /**
     * Уникальный идентификатор
     */
    alertId?: string;
    /**
     * Текст предупреждения
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
     * Тип предупреждения
     */
    alertType?: string;
    button?: AlertButton;
    /**
     * Наличие кнопки "Закрыть"
     */
    closeButton?: boolean;
};
