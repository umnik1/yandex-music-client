import { AxiosResponse } from 'axios';
export interface TokenResponse {
    access_token: string;
    expires_in?: number;
    token_type?: string;
    uid: number;
}
export declare function getToken(username: string, password: string): Promise<AxiosResponse<TokenResponse>>;
