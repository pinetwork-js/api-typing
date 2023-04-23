import type * as api from '../../rest/v2';
import { routify } from '../routify';

export const getAuthenticatedUser = routify<api.RESTGetAuthenticatedUserResult>`v2/me`({});
