import type { Chart } from './Chart';
import type { Track } from './Track';
import type { TrackItem } from './TrackItem';
export type ChartItem = (TrackItem & {
    chart?: Chart;
} & {
    /**
     * Null when tracks are not riched
     */
    track: Track;
    chart: Chart;
});
