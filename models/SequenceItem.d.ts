import type { Track } from './Track';
/**
 * Класс, представляющий звено последовательности радио станции
 */
export type SequenceItem = {
    type: string;
    track: Track;
    liked: boolean;
    trackParameters: {
        bpm: number;
        hue: number;
        energy: number;
    };
};
