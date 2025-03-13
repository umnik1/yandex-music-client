import type { LicenceTextPart } from './LicenceTextPart';
import type { Price } from './Price';
/**
 * продаваемый продукт
 */
export type Product = {
    /**
     * Уникальный идентификатор.
     */
    productId?: string;
    /**
     * Тип продаваемого.
     */
    type?: string;
    /**
     * Длительность общего периода.
     */
    commonPeriodDuration?: string;
    /**
     * Длительность.
     */
    duration?: number;
    /**
     * Длительность испытательного срока.
     */
    trialDuration?: number;
    /**
     * Цена.
     */
    price?: Price;
    /**
     * Предоставляемая возможность.
     */
    feature?: string;
    /**
     * Отладочный продукт.
     */
    debug?: boolean;
    /**
     * Даёт ли подписку "Плюс".
     */
    plus?: boolean;
    /**
     * Самый дешёвый (лучшее предложение).
     */
    cheapest?: boolean;
    /**
     * Заголовок продукта.
     */
    title?: string;
    /**
     * Семейная ли подписка.
     */
    familySub?: boolean;
    /**
     * Картинка для превью на facebook.
     */
    fbImage?: string;
    /**
     * Заголовок превью на facebook.
     */
    fbName?: string;
    /**
     * Доступно ли для семьи.
     */
    family?: boolean;
    /**
     * Список предоставляемых возможностей.
     */
    features?: Array<string>;
    /**
     * Описание.
     */
    description?: string;
    /**
     * Доступна ли покупка.
     */
    available?: boolean;
    /**
     * Доступен ли пробный период.
     */
    trialAvailable?: boolean;
    /**
     * Длительность пробного периода.
     */
    trialPeriodDuration?: string;
    /**
     * Длительность вступительного периода TODO.
     */
    introPeriodDuration?: string;
    /**
     * Цена вступительного периода.
     */
    introPrice?: Price;
    /**
     * Длительность первого срока (за меньшую цену).
     */
    startPeriodDuration?: string;
    /**
     * Цена за первый срок.
     */
    startPrice?: Price;
    /**
     * Длительность пробного периода.
     */
    licenceTextParts?: LicenceTextPart;
    /**
     * Доступен испытательный срок продавца TODO.
     */
    vendorTrialAvailable?: boolean;
    /**
     * Текст кнопки.
     */
    buttonText?: string;
    /**
     * Дополнительный текст кнопки.
     */
    buttonAdditionalText?: string;
    /**
     * Способы оплаты.
     */
    paymentMethodTypes?: Array<string>;
};
