// @flow
export default {
  resolver: '@parcel/resolver-base',
  servers: ['@parcel/server-typescript'],
  transforms: {
    '*.{babel,jsx,es6}': ['@parcel/transform-babel'],
    '*.{js,mjs,jsm}': [
      '@parcel/transform-babel',
      '@parcel/transform-javascript'
    ],
    '*.{ml,re}': ['@parcel/transform-reason'],
    '*.{ts,tsx}': ['@parcel/transform-typescript'],
    '*.coffee': ['@parcel/transform-coffeescript'],
    '*.json5': ['@parcel/transform-json5'],
    '*.json': ['@parcel/transform-json'],
    '*.{yaml,yml}': ['@parcel/transform-yaml'],
    '*.toml': ['@parcel/transform-toml'],
    '*.{gql,graphql}': ['@parcel/transform-graphql'],
    '*.{css,pcss}': ['@parcel/transform-css'],
    '*.styl': ['@parcel/transform-stylus'],
    '*.less': ['@parcel/transform-less'],
    '*.{sass,scss}': ['@parcel/transform-sass'],
    '*.{html,htm}': ['@parcel/transform-html'],
    '*.rs': ['@parcel/transform-rust'],
    '*.vue': ['@parcel/transform-vue'],
    '*.wasm': ['@parcel/transform-wasm'],
    '*.webmanifest': ['@parcel/transform-webmanifest'],
    '*.{png,jpeg,jpg,svg,gif,webp,tiff,pdf,bmp,ico}': ['@parcel/transform-raw'],
    '*.{ttf,otf,woff,woff2,svg,eot}': ['@parcel/transform-raw'],
    '*.{pdf}': ['@parcel/transform-raw']
  },
  packagers: {}
};
