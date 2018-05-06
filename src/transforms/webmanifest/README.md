# @parcel/transform-webmanifest

> Parcel transform for WebAssembly

## Installation

```
yarn add --dev @parcel/transform-webmanifest
```

## Usage

This asset ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.webmanifest": ["@parcel/transform-webmanifest"]
  }
}
```
