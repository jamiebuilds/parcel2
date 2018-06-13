# @parcel/transform-babel

> Parcel transform for [Babel](https://babeljs.io)

## Installation

```
yarn add --dev @parcel/transform-babel
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.{js,jsx}": ["@parcel/transform-babel"]
  }
}
```

See the [Babel docs on how to configure Babel](https://babeljs.io/docs/usage/babelrc/)
