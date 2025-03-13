import type { LandingBlockItem } from './LandingBlockItem';
import type { LandingBlockType } from './LandingBlockType';
import type { LandingPodcastItem } from './LandingPodcastItem';
export type LandingBlock = {
    id: string;
    title: string;
    /**
     * the follwing values are allowed or combination of these values separated by comman - personal-playlists, podcasts, play-context, chart, new-playlists, new-releases, promotions
     */
    type: string;
    typeForFrom: LandingBlockType;
    description: string;
    entities: Array<(LandingPodcastItem | LandingBlockItem)>;
};
