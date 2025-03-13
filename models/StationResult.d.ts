import type { AdParams } from './AdParams';
import type { RotorData } from './RotorData';
import type { RotorSettings } from './RotorSettings';
import type { RotorSettings2 } from './RotorSettings2';
import type { Station } from './Station';
export type StationResult = {
    station?: Station;
    data?: RotorData;
    settings?: RotorSettings;
    settings2?: RotorSettings2;
    adParams?: AdParams;
    rupTitle?: string;
    rupDescription?: string;
};
