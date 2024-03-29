import type { LanguageCode } from '../../utils';

/**
 * List of available roles
 */
export type APIUserRoles = 'core_team' | 'email_verified' | 'event_hacker' | 'mega_mod' | 'moderator';

/**
 * List of available scopes
 */
export type APIUserScopes = 'payments' | 'platform' | 'preferred_language' | 'roles' | 'username' | 'wallet_address';

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#userdto (not updated)
 */
export interface APIUser {
	/**
	 * The UID of the user.
	 */
	uid: string;

	/**
	 * The credentials of the user.
	 */
	credentials: APIUserCredentials;

	/**
	 * The username of the user if `username` scope is specified.
	 */
	username?: string;

	/**
	 * The roles of the user if `roles` scope is specified.
	 */
	roles?: APIUserRoles[];

	/**
	 * The preferred language of the user if `preferred_language` scope is specified.
	 */
	preferred_language?: LanguageCode;
}

/**
 * Structure representing a user credentials from the Pi Platform API.
 */
export interface APIUserCredentials {
	/**
	 * The available scopes for the user.
	 */
	scopes: APIUserScopes[];

	/**
	 * Information on the validity of the scopes.
	 */
	valid_until: APIUserCredentialsValidation;
}

/**
 * Structure representing a user credentials validation information from the Pi Platform API
 */
export interface APIUserCredentialsValidation {
	/**
	 * Timestamp of the scopes validity end date.
	 */
	timestamp: number;

	/**
	 * ISO 8601 representation of the scopes validity end date.
	 */
	iso8601: string;
}
