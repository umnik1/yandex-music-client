import { YandexMusicClient } from './YandexMusicClient';
import { TrackDownloadInfo } from "./";
export interface DownloadInfo {
    s: string;
    ts: string;
    path: string;
    host: string;
}
export declare function getTrackUrl(client: YandexMusicClient, trackId: string): Promise<string>;
export declare function getDownloadInfo(trackInfo: TrackDownloadInfo[], headers?: any): Promise<DownloadInfo>;
export declare function createTrackURL(info: DownloadInfo): string;
