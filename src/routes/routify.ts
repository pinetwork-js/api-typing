// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Route<R = void, P extends any = undefined> = string & { _: never };

export type RoutePayload<E> = E extends Route<any, infer R> ? R : void;
export type RouteResult<E> = E extends Route<infer R> ? R : undefined;

export function routify<R = void, P extends any = undefined, K extends readonly string[] = readonly string[]>(
	literals: TemplateStringsArray,
	...keys: K
) {
	return function (data: Record<K[number], string>): Route<R, P> {
		let endpoint = literals[0];

		for (let index = 1; index < literals.length; index++) {
			const literal = literals[index];
			const key: K[number] = keys[index - 1];
			const value = data[key];

			endpoint += `${value}${literal}`;
		}

		return endpoint as Route<R, P>;
	};
}
