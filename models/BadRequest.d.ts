import type { Error } from './Error';
import type { InvocationInfo } from './InvocationInfo';
export type BadRequest = {
    invocationInfo?: InvocationInfo;
    error?: Error;
};
