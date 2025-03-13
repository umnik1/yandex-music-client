import type { VisibilityEnum } from './VisibilityEnum';
export type UserSettings = {
    uid?: number;
    lastFmScrobblingEnabled?: boolean;
    facebookScrobblingEnabled?: boolean;
    shuffleEnabled?: boolean;
    addNewTrackOnPlaylistTop?: boolean;
    volumePercents?: boolean;
    userMusicVisibility?: VisibilityEnum;
    userSocialVisibility?: VisibilityEnum;
    adsDisabled?: boolean;
    modified?: string;
    rbtDisabled?: string;
    /**
     * Тема оформления.
     */
    theme?: 'black' | 'default';
    promosDisabled?: boolean;
    autoPlayRadio?: boolean;
    syncQueueEnabled?: boolean;
};
