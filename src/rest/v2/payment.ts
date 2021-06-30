import { APIPartialPayment, APIPayment } from '../../payloads';

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#get-a-payment
 */
export type RESTGetPaymentResult = APIPayment;

/**
 * Undocumented route (POST /payments)
 */
export type RESTPostCreatePaymentJSONBody = APIPartialPayment;

/**
 * Undocumented route (POST /payments)
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
 * Undocumented route (GET /payments/recent)
 */
export interface RESTGetRecentPaymentResult {
	/**
	 * Whether or not there is a recent payment
	 */
	exists: boolean;

	/**
	 * The recent payment if there is one
	 */
	payment: null | APIPayment;
}
