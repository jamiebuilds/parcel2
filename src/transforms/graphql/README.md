# @parcel/transform-graphql

> Parcel transform for GraphQL

## Installation

```
yarn add --dev @parcel/transform-graphql
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.{gql,graphql}": ["@parcel/transform-graphql"]
  }
}
```
