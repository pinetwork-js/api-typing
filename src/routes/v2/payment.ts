import type * as api from '../../rest/v2';
import { routify } from '../routify';

// eslint-disable-next-line @typescript-eslint/naming-convention
type _ = undefined;

export const createAppToUserPayment = routify<
	api.RESTPostCreateAppToUserPaymentResult,
	api.RESTPostCreateAppToUserPaymentJSONBody
>`v2/payments`({});

export const createUserToAppPayment = routify<
	api.RESTPostCreateUserToAppPaymentResult,
	api.RESTPostCreateUserToAppPaymentJSONBody
>`v2/payments/user_to_app`({});

export const getIncompleteClientPayment = routify<api.RESTGetIncompleteClientPaymentResult>`v2/payments/incomplete`({});

export const getIncompleteServerPayments =
	routify<api.RESTGetIncompleteServerPaymentsResult>`v2/payments/incomplete_server_payments`({});

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

export const cancelPayment = routify<
	api.RESTPostCancelPaymentResult,
	api.RESTPostCancelPaymentJSONBody,
	['paymentId']
>`v2/payments/${'paymentId'}/cancel`;
