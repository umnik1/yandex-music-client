import type { MenuItem } from './MenuItem';
import type { Playlist } from './Playlist';
export type FullChartResult = {
    id: string;
    type: 'chart';
    typeForFrom: string;
    title: string;
    chartDescription: string;
    menu: {
        menu: MenuItem;
    };
    chart: Playlist;
};
