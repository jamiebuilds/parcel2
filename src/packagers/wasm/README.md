# @parcel/packager-wasm

> Parcel packager for WebAssembly

## Installation

```
yarn add --dev @parcel/packager-wasm
```

## Usage

This ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "packagers": {
    "*.wasm": "@parcel/packager-wasm"
  }
}
```
