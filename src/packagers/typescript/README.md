# @parcel/packager-typescript

> Parcel packager for typescript files

## Installation

```
yarn add --dev @parcel/packager-typescript
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```js
{
  "packagers": {
    "*.{ts,tsx}": "@parcel/packager-typescript"
  }
}
```
