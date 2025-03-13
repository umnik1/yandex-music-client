import type { DiscreteScale } from './DiscreteScale';
import type { RestrictionEnum } from './RestrictionEnum';
/**
 * Ограничения для настроек станции старого формата
 */
export type Restrictions = {
    language?: RestrictionEnum;
    mood?: DiscreteScale;
    energy?: DiscreteScale;
    diversity?: RestrictionEnum;
};
