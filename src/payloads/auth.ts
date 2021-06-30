const APIUserRoles = ['email_verified'] as const;

/**
 * Undocumented structure
 */
export interface APIUser {
	/**
	 * The username of the user
	 */
	username: string;

	/**
	 * The UID of the user
	 */
	uid: string;

	/**
	 * The roles of the user
	 */
	roles: typeof APIUserRoles;
}
