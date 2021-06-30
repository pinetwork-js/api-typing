import * as api from '../rest';
import { Route, routify } from './routify';

// eslint-disable-next-line @typescript-eslint/naming-convention
type _ = undefined;

// Authentication
export const getAuthenticatedUser = '/me' as Route<api.RESTGetAuthenticatedUserResult>;

// Payments
export const createPayment = '/payments' as Route<api.RESTPostCreatePaymentResult, api.RESTPostCreatePaymentJSONBody>;
export const getRecentPayment = '/payments/recent' as Route<api.RESTGetRecentPaymentResult>;
export const getPayment = routify<api.RESTGetPaymentResult, _, ['paymentId']>`/payments/${'paymentId'}`;
export const approvePayment = routify<
	api.RESTPostApprovePaymentResult,
	_,
	['paymentId']
>`/payments/${'paymentId'}/approve`;
export const verifyTransaction = routify<
	api.RESTPostVerifyTransactionResult,
	api.RESTPostVerifyTransactionJSONBody,
	['paymentId']
>`/payments/${'paymentId'}/verify_transaction`;
export const completePayment = routify<
	api.RESTPostCompletePaymentResult,
	api.RESTPostCompletePaymentJSONBody,
	['paymentId']
>`/payments/${'paymentId'}/complete`;
