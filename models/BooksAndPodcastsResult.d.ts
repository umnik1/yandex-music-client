/**
 * Блоки главной страницы кнги и подкастов
 */
export type BooksAndPodcastsResult = {
    title: string;
    blocks: Array<{
        id: string;
        title?: string;
        type: string;
        typeForFrom: string;
        entities?: Array<{
            id?: string;
            type?: string;
            data?: any;
        }>;
    }>;
};
