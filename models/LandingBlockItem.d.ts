import type { Album } from './Album';
import type { ChartItem } from './ChartItem';
import type { GeneratedPlaylistLandingBlock } from './GeneratedPlaylistLandingBlock';
import type { LandingBlockType } from './LandingBlockType';
import type { MixLink } from './MixLink';
import type { Playlist } from './Playlist';
import type { Promotion } from './Promotion';
export type LandingBlockItem = {
    id: string;
    type: LandingBlockType;
    data: (Album | Playlist | Promotion | MixLink | GeneratedPlaylistLandingBlock | ChartItem);
};
