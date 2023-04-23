import type * as api from '../../rest/v2';
import { routify } from '../routify';

// eslint-disable-next-line @typescript-eslint/naming-convention
type _ = undefined;

export const trackUsage = routify<_, api.RESTPostUsageTrackJSONBody>`v2/usage/track`({});
