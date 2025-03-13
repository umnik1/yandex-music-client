import type { Price } from './Price';
import type { Product } from './Product';
/**
 * Предложения по покупке
 */
export type Settings = {
    inAppProducts?: Array<Product>;
    nativeProducts?: Array<Product>;
    webPaymentUrl?: string;
    webPaymentMonthProductPrice?: Price;
    promoCodesEnabled?: boolean;
};
