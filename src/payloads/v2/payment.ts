/**
 * https://github.com/pi-apps/pi-ruby#create_payment
 */
export interface APIPartialPayment {
	/**
	 * The payment amount
	 */
	amount: number;

	/**
	 * A string provided by the developer, shown to the user
	 */
	memo: string;

	/**
	 * An object provided by the developer for their own usage
	 */
	metadata: Record<string, unknown>;

	/**
	 * The user's app-specific ID
	 */
	uid: string;
}

export type APIPaymentDirection = 'app_to_user' | 'user_to_app';
export type APIPaymentNetwork = 'Pi Network' | 'Pi Testnet';

/**
 * https://github.com/pi-apps/pi-ruby#complete_payment
 */
export interface APIPayment extends Omit<APIPartialPayment, 'uid'> {
	/**
	 * The payment identifier
	 */
	identifier: string;

	/**
	 * The user's app-specific ID
	 */
	user_uid: string;

	/**
	 * The sender address of the blockchain transaction
	 */
	from_address: string;

	/**
	 * The recipient address of the blockchain transaction
	 */
	to_address: string;

	/**
	 * The direction of the payment
	 */
	direction: APIPaymentDirection;

	/**
	 * The payment's creation timestamp
	 */
	created_at: string;

	/**
	 * The network of the payment
	 */
	network: APIPaymentNetwork;

	/**
	 * Status flags representing the current state of this payment
	 */
	status: APIPaymentStatus;

	/**
	 * Blockchain transaction data, this is null if no transaction has been made yet
	 */
	transaction: APIPaymentTransaction | null;
}

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#paymentdto
 */
export interface APIPaymentStatus {
	/**
	 * Server-Side Approval
	 */
	developer_approved: boolean;

	/**
	 * Blockchain transaction verified
	 */
	transaction_verified: boolean;

	/**
	 * Server-Side Completion
	 */
	developer_completed: boolean;

	/**
	 * Cancelled by the developer or by Pi Network
	 */
	cancelled: boolean;

	/**
	 * Cancelled by the user
	 */
	user_cancelled: boolean;
}

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#paymentdto
 */
export interface APIPaymentTransaction {
	/**
	 * The id of the blockchain transaction
	 */
	txid: string;

	/**
	 * True if the transaction matches the payment, false otherwise
	 */
	verified: boolean;

	/**
	 * A link to the operation on the Blockchain API
	 */
	_link: string;
}

export type APIIncompleteClientPayment =
	| {
			/**
			 * Whether or not there is an incomplete payment
			 */
			exists: false;

			/**
			 * The incomplete payment if there is one
			 */
			payment: null;
	  }
	| {
			/**
			 * Whether or not there is an incomplete payment
			 */
			exists: true;

			/**
			 * The incomplete payment if there is one
			 */
			payment: APIPayment;
	  };
