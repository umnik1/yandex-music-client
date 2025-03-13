/**
 * Информация о правах пользователя, их изначальных значениях и даты окончания
 */
export type Permissions = {
    until?: string;
    values?: Array<'landing-play' | 'feed-play' | 'radio-play' | 'mix-play' | 'radio-skips' | 'play-radio-full-tracks'>;
    default?: Array<'landing-play' | 'feed-play' | 'radio-play' | 'mix-play' | 'radio-skips' | 'play-radio-full-tracks'>;
};
