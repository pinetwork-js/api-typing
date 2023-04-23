import type { RESTPostNetworkErrorJSONBody } from '../rest';
import { routify } from './routify';

// eslint-disable-next-line @typescript-eslint/naming-convention
type _ = undefined;

// Network error
export const postNetworkError = routify<_, RESTPostNetworkErrorJSONBody>`/network/error`({});
