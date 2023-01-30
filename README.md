This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Then polkadot api was added using ```yarn add @polkadot/api```

## Extras that you get here
There are two components in there:
1. Welcome to show a simple parameterised welcome message
1. Dotty for showing how to connect to a Polkadot chain, parameterised to whatever polkadot chain you're examining


## What you need to do before running
```.env.local``` file is not committed.

Create that in file in the project root and set values, e.g. 
```
NEXT_PUBLIC_WS_PROVIDER_URL=wss://rpc.polkadot.io
NEXT_PUBLIC_WELCOME_BANNER="Hello fellow Polkadot hackathoners!"
```
*Do not put any private data such as private keys in .env.local!*  It can end up as public knowledge

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More Next JS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Learn more connecting to Polkadot in TypeScript / JavaScript

- https://polkadot.js.org/docs/api

If you've added polkadot-api using yarn, you can use
```import { ApiPromise, WsProvider } from '@polkadot/api';``` instead of needing to use ```const { ApiPromise, WsProvider } = require('@polkadot/api');``` as shown in the docs

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
