import type { StationResult } from './StationResult';
export type Dashboard = {
    dashboardId: string;
    stations: Array<StationResult>;
    pumpkin: boolean;
};
