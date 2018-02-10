# parcel-asset-typescript

> Parcel Asset for TypeScript

## Installation

```
yarn add --dev parcel-asset-typescript
```

## Usage

This asset ships as part of [parcel-config-base][https://npmjs.com/package/parcel-config-base]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.{ts,tsx}": ["parcel-asset-typescript"]
  }
}
```
