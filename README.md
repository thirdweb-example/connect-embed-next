# ConnectEmbed usage in Next.js

This example demonstrates how to use `ConnectEmbed` component in Next.js to create a "Sign in" Page. Checkout the [Live Demo](https://connect-embed-next.thirdweb-preview.com/)

This template contains two examples

1. Connecting a wallet using `ConnectEmbed` component
2. Connecting a wallet + Enforcing Authentication using `ConnectEmbed` component

## Using this template

- Clone this repository locally and then install the dependencies using `npm install` or `yarn install`

- Copy the `.env.example` file to `.env.local`

- [Create an API Key](https://portal.thirdweb.com/account/api-keys/create) and get the client id and set the `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` environment variable in the `.env.local` file

  ```env
  NEXT_PUBLIC_THIRDWEB_CLIENT_ID=...
  ```

- If you want to test the Example #2 ( Connect + Enforce Authentication ), You will need to set below mentioned environment variables in the `.env.local` file as well

  - set the `THIRDWEB_AUTH_PRIVATE_KEY` to the admin private key you want to use for Auth
  - Set `NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN` variable to the domain you want to use for Auth.

    ```env
    THIRDWEB_AUTH_PRIVATE_KEY=...
    NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN=example.com
    ```

## Start Dev server

Run `npm run dev` or `yarn dev` to start the dev server

## Learn More

- [thirdweb Auth Documentation](https://portal.thirdweb.com/wallets/auth)
- [ConnectEmbed Documentation](https://portal.thirdweb.com/react/v4/components/ConnectEmbed)

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
