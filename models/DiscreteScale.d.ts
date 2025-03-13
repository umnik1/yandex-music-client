import type { MinMax } from './MinMax';
/**
 * Класс, представляющий дискретное значение
 */
export type DiscreteScale = {
    type?: string;
    name?: string;
    min?: MinMax;
    max?: MinMax;
};
