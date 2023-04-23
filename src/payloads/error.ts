export interface NetworkError {
	/**
	 * The date when the error occurred
	 */
	time: string;

	/**
	 * The action that was running when the error occurred
	 */
	call: string;

	/**
	 * A message about the error
	 */
	message: string;

	/**
	 * Some information returned by the error
	 */
	data: unknown;
}
