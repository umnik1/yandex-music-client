import type { LandingBlock } from './LandingBlock';
export type LandingResult = {
    pumpkin: boolean;
    contentId: string;
    blocks: Array<LandingBlock>;
};
