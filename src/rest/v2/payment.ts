import { APIPartialPayment, APIPayment } from '../../payloads';

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#get-a-payment
 */
export type RESTGetPaymentResult = APIPayment;

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#create-a-payment
 */
export type RESTPostCreatePaymentJSONBody = APIPartialPayment;

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#create-a-payment
 */
export type RESTPostCreatePaymentResult = APIPayment;

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#approve-a-payment
 */
export type RESTPostApprovePaymentResult = APIPayment;

/**
 * Undocumented route (POST /payments/:payment_id/verify_transaction)
 */
export interface RESTPostVerifyTransactionJSONBody {
	/**
	 * The id of the blockchain transaction
	 */
	txid: string;
}

/**
 * Undocumented route (POST /payments/:payment_id/verify_transaction)
 */
export type RESTPostVerifyTransactionResult = APIPayment;

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#complete-a-payment
 */
export interface RESTPostCompletePaymentJSONBody {
	/**
	 * The id of the blockchain transaction
	 */
	txid: string;
}

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#complete-a-payment
 */
export type RESTPostCompletePaymentResult = APIPayment;

/**
 * Undocumented route (GET /payments/incomplete)
 */
export interface RESTGetIncompletePaymentResult {
	/**
	 * Whether or not there is an incomplete payment
	 */
	exists: boolean;

	/**
	 * The incomplete payment if there is one
	 */
	payment: null | APIPayment;
}
