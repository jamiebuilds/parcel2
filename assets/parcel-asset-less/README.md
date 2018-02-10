# parcel-asset-less

> Parcel Asset for Less

## Installation

```
yarn add --dev parcel-asset-less
```

## Usage

This asset ships as part of [parcel-config-base][https://npmjs.com/package/parcel-config-base]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.less": ["parcel-asset-less"]
  }
}
```
