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

To use the page on your code:

```js
const api = require('@pinetwork-js/api-typing');
```

```ts
// TypeScript or ESM support
import api from '@pinetwork-js/api-typing';
```

## Project Structure

The export is split into two main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API.

- Everything exported with the `REST` prefix represents data that only comes from or is directly related to the REST API.

  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><JSONBody|Result>` where the type represents what it will return.

    - For example, `RESTPostCompletePaymentJSONBody` or `RESTPostCompletePaymentResult`.

  - If a type ends with `Result`, then it represents the expected result by calling its accompanying route.