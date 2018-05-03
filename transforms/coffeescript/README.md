# @parcel/transform-coffeescript

> Parcel transform for [CoffeeScript](http://coffeescript.org)

## Installation

```
yarn add --dev @parcel/transform-coffeescript
```

## Usage

This asset ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.coffee": ["@parcel/transform-coffeescript"]
  }
}
```
