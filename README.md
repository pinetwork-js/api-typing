# Pi Network API Types

[![GitHub](https://img.shields.io/github/license/PiNetwork-js/api-typing)](https://github.com/PiNetwork-js/api-typing/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@pinetwork-js/api-typing?color=crimson&logo=npm)](https://www.npmjs.com/package/@pinetwork-js/api-typing)

Typing for the [Pi Network API](https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md)

## Installation

Install with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com):

```sh
npm install @pinetwork-js/api-typing --save-dev
yarn add @pinetwork-js/api-typing -D
```

### Usage

To use the package on your code, you can import everything or just what you want:

```js
const api = require('@pinetwork-js/api-typing');
const { APIPayment } = require('@pinetwork-js/api-typing');
```

```ts
// TypeScript or ESM support
import api from '@pinetwork-js/api-typing';
import { APIPayment } from '@pinetwork-js/api-typing';
```

The package is divided into three parts: `payloads`, `rest` and `routes`. If you just want to import all the types of a certain part:

```js
const { routes } = require('@pinetwork-js/api-typing');
```

```ts
// TypeScript or ESM support
import { routes } from '@pinetwork-js/api-typing';
```

### Routes

The package provides typed routes for the Pi Network API. There are static and dynamic routes. Here's how it works:

**Static routes:**

Static routes are routes that doesn't change (you don't have to provide any information in the route) like `/me`. The exported static routes are just strings but with a custom type `Route<R, P>` (where R is the type of the data sent by the API and P is the type of the payload we send to the API). Thanks to this type, we can store the type of the result and the payload requested by the route to type the requests we make.

**Dynamic routes:**

Dynamic routes are routes that need to be changed like `/payments/:payment_id` (you have to provide a payment id to get the information of that specific payment for example). The exported dynamic routes are functions who take an object as argument with the information it needs to create the final route. The result is a crafted string (the route) with the custom type `Route<R, P>` (like a static route). Here's an example:

```ts
import { routes } from '@pinetwork-js/api-typing';

// routes.getPayment represents the dynamic route for 'GET /payments/:payment_id'

const getPaymentRoute = routes.getPayment({ paymentId: '1234' });
console.log(getPaymentRoute); // '/v2/payments/1234'

type GetPaymentRoute = typeof getPaymentRoute; // Route<APIPayment, undefined>
```

**How to type a request?**

The package provide two generic types to help you for that: `RouteResult` and `RoutePayload`. `RouteResult` get the result's type of a route (the `R` in the type `Route<R, P>`) and `RoutePayload` get the payload's type (the `P`). Here's an example of (non-functional) code to show you how to type your request functions (based on my rewrite of the SDK that you can find [here](https://github.com/PiNetwork-js/sdk)):

```ts
import { RoutePayload, RouteResult, Route } from '@pinetwork-js/api-typing';

async function get<T extends Route<any>>(route: T): Promise<RouteResult<T>> {
  const response = await myGetRequest(route);

  return response.data;
}

async function post<T extends Route<any, any>>(route: T, payload: RoutePayload<T>): Promise<RouteResult<T>> {
  const response = await myPostRequest(route, payload);

  return response.data;
}
```

## Project Structure

The export is split into two main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API.

- Everything exported with the `REST` prefix represents data that only comes from or is directly related to the REST API.

  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><JSONBody|Result>` where the type represents what it will return.

    - For example, `RESTPostCompletePaymentJSONBody` or `RESTPostCompletePaymentResult`.

  - If a type ends with `Result`, then it represents the expected result by calling its accompanying route.

- Anything else that is miscellaneous will be exported based on what it represents (for example the `routes` part)