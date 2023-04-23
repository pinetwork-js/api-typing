import type { NetworkError } from '../payloads';

/**
 * Undocumented route (POST /network/error)
 */
export interface RESTPostNetworkErrorJSONBody {
	/**
	 * The error to send to the API
	 */
	error: NetworkError;
}
