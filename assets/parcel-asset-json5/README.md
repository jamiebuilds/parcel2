# parcel-asset-json5

> Parcel Asset for JSON5

## Installation

```
yarn add --dev parcel-asset-json5
```

## Usage

This asset ships as part of [parcel-config-base][https://npmjs.com/package/parcel-config-base]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.json5": ["parcel-asset-json5"]
  }
}
```
