# parcel-asset-babel

> Parcel Asset for [Babel](https://babeljs.io)

## Installation

```
yarn add --dev parcel-asset-babel
```

## Usage

This asset ships as part of [parcel-config-base][https://npmjs.com/package/parcel-config-base]
which is the default config for Parcel. If you aren't using that, you will need
to configure it yourself in your `.parcelrc`.

```json
{
  "assets": {
    "*.{js,jsx}": ["parcel-asset-babel"]
  }
}
```

See the [Babel docs on how to configure Babel](https://babeljs.io/docs/usage/babelrc/)
