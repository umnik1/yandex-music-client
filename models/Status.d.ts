import type { Account } from './Account';
import type { Alert } from './Alert';
import type { Permissions } from './Permissions';
import type { Subscription } from './Subscription';
export type Status = {
    account: Account;
    permissions: Permissions;
    subscription: Subscription;
    /**
     * Наличие статуса модератора проверки корректности информации
     */
    subeditor: boolean;
    /**
     * Уровень статуса модератора
     */
    subeditorLevel: number;
    pretrialActive: boolean;
    /**
     * Информация о Plus подписке
     */
    plus: {
        hasPlus?: boolean;
        isTutorialCompleted?: boolean;
        migrated?: boolean;
    };
    /**
     * Основной e-mail адрес аккаунта
     */
    defaultEmail: string;
    /**
     * Блок с предупреждениями о конце подписки и подарках
     */
    barBelow?: Alert;
    userhash: string;
};
