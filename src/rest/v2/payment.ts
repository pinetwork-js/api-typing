import type { APIIncompleteClientPayment, APIPartialPayment, APIPayment } from '../../payloads';

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#get-a-payment
 */
export type RESTGetPaymentResult = APIPayment;

/**
 * https://github.com/pi-apps/pi-ruby#create_payment
 */
export type RESTPostCreatePaymentJSONBody = APIPartialPayment;

/**
 * https://github.com/pi-apps/pi-ruby#create_payment
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
export type RESTGetClientIncompletePaymentResult = APIIncompleteClientPayment;

/**
 * https://github.com/pi-apps/pi-ruby#get_incomplete_server_payments
 */
export type RESTGetIncompleteServerPaymentsResult = APIPayment[];

/**
 * https://github.com/pi-apps/pi-ruby#cancel_payment
 */
export type RESTPostCancelPaymentJSONBody = Record<string, never>;

/**
 * https://github.com/pi-apps/pi-ruby#cancel_payment
 */
export type RESTPostCancelPaymentResult = APIPayment;
