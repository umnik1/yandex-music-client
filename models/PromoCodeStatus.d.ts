import type { Status } from './Status';
/**
 * статус активации промо-кода
 */
export type PromoCodeStatus = {
    /**
     * Статус операции
     */
    status?: string;
    /**
     * Описание статуса
     */
    statusDesc?: string;
    /**
     * Информация об аккаунте пользователя.
     */
    accountStatus?: Status;
};
