import type { SequenceItem } from './SequenceItem';
export type StationTracksResult = {
    id: {
        type: string;
        tag: string;
    };
    sequence: Array<SequenceItem>;
    batchId: string;
    pumpkin: boolean;
    radioSessionId: string;
};
