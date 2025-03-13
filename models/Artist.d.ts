import type { Cover } from './Cover';
import type { Track } from './Track';
export type Artist = {
    composer: boolean;
    cover?: Cover | null;
    decomposed?: Array<any> | null;
    genres: Array<any>;
    id: (string | number);
    name: string;
    various: boolean;
    popularTracks?: Array<Track> | null;
    /**
     * Имеются ли в продаже билеты на концерт
     */
    ticketsAvailable?: boolean | null;
    regions?: Array<string> | null;
};
