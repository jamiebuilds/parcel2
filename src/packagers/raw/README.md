# @parcel/packager-raw

> Parcel packager for raw files

## Installation

```
yarn add --dev @parcel/packager-raw
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```js
{
  "packagers": {
    // put all the other packagers above this one...
    "*": "@parcel/packager-raw"
  }
}
```
