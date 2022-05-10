import { createClient } from '@urql/core';

export const client = createClient({
  url: 'https://happy-breeze.myshopify.com/api/2022-04/graphql',
  fetchOptions: () => ({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Shopify-Storefront-Access-Token': 'f8d666e5c7ea78ece514ec7c8a560be4',
    },
  }),
});
