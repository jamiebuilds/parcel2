# @parcel/transform-raw

> Parcel transform for Reason

## Installation

```
yarn add --dev @parcel/transform-reason
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.re": ["@parcel/transform-reason"]
  }
}
```
