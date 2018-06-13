# @parcel/transform-yaml

> Parcel transform for YAML

## Installation

```
yarn add --dev @parcel/transform-yaml
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.{yaml,yml}": ["@parcel/transform-yaml"]
  }
}
```
