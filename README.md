# Vellum Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/vellum)](https://www.npmjs.com/package/@fern-api/vellum)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Vellum Node.js library provides access to the Vellum API from JavaScript/TypeScript.


## Installation

```
npm install --save @fern-api/vellum
# or
yarn add @fern-api/vellum
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-xbs4jx?file=app.ts)

```typescript
import { VellumClient } from '@fern-api/vellum';

const vellum = new VellumClient({
  apiKey: 'VELLUM_API_KEY',
});

await client.generate({
  deploymentName: 'my-deployment',
  requests: [{ inputValues: { question: 'Could I please get a refund' } }],
});

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
