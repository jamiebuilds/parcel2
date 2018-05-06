# @parcel/transform-rust

> Parcel transform for Rust

## Installation

```
yarn add --dev @parcel/transform-rust
```

## Usage

This asset ships as part of [@parcel/config-default][https://npmjs.com/package/@parcel/config-default]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.rs": ["@parcel/transform-rust"]
  }
}
```
