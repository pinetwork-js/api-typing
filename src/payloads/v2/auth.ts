type APIUserRoles = 'email_verified' | 'core_team' | 'mega_mod' | 'moderator';

/**
 * Undocumented structure
 */
export interface APIUser {
	/**
	 * The username of the user if `username` scope is specified.
	 */
	username?: string;

	/**
	 * The UID of the user
	 */
	uid: string;

	/**
	 * The roles of the user if `roles` scope is specified.
	 */
	roles?: APIUserRoles[];
}
