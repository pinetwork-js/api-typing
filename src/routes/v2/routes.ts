import type * as api from '../../rest/v2';
import type { Route } from '../routify';
import { routify } from '../routify';

// eslint-disable-next-line @typescript-eslint/naming-convention
type _ = undefined;

// Authentication
export const getAuthenticatedUser = 'v2/me' as Route<api.RESTGetAuthenticatedUserResult>;

// Payments
export const createPayment = 'v2/payments' as Route<api.RESTPostCreatePaymentResult, api.RESTPostCreatePaymentJSONBody>;
export const getIncompletePayment = 'v2/payments/incomplete' as Route<api.RESTGetIncompletePaymentResult>;
export const getPayment = routify<api.RESTGetPaymentResult, _, ['paymentId']>`v2/payments/${'paymentId'}`;
export const approvePayment = routify<
	api.RESTPostApprovePaymentResult,
	_,
	['paymentId']
>`v2/payments/${'paymentId'}/approve`;
export const verifyTransaction = routify<
	api.RESTPostVerifyTransactionResult,
	api.RESTPostVerifyTransactionJSONBody,
	['paymentId']
>`v2/payments/${'paymentId'}/verify_transaction`;
export const completePayment = routify<
	api.RESTPostCompletePaymentResult,
	api.RESTPostCompletePaymentJSONBody,
	['paymentId']
>`v2/payments/${'paymentId'}/complete`;

// Usage
export const trackUsage = 'v2/usage/track' as Route<_, api.RESTPostUsageTrackJSONBody>;
