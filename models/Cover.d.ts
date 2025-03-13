export type Cover = {
    custom: boolean;
    /**
     * Существует когда поле type = "pic"
     */
    dir?: string;
    type: 'pic' | 'mosaic';
    /**
     * Существует когда поле type = "mosaic"
     */
    itemsUri?: Array<string>;
    /**
     * Существует когда поле type = "pic"
     */
    uri?: string;
    version?: string;
    /**
     * If exists other properties is missing
     */
    error?: string;
};
