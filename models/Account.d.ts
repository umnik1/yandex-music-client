/**
 * Основная информация об аккаунте
 */
export type Account = {
    /**
     * Текущая дата и время
     */
    now: string;
    /**
     * Уникальный идентификатор
     */
    uid: number;
    /**
     * Виртуальное имя (обычно e-mail)
     */
    login: string;
    /**
     * Регион
     */
    region: number;
    /**
     * Полное имя (имя и фамилия)
     */
    fullName: string;
    /**
     * Фамилия
     */
    secondName: string;
    /**
     * Имя
     */
    firstName?: string;
    /**
     * Отображаемое имя
     */
    displayName: string;
    /**
     * Доступен ли сервис
     */
    serviceAvailable: boolean;
    /**
     * Является ли пользователем чьим-то другим
     */
    hostedUser: boolean;
    /**
     * Мобильные номера
     */
    'passport-phones': Array<{
        phone?: string;
    }>;
};
