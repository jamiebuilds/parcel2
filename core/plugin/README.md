# @parcel/plugin

> Parcel plugin system core package

## Installation

```sh
yarn add @parcel/plugin
```

## Usage

```js
import { Transformer } from '@parcel/plugin';

export default new Transformer({
  // ...
});
```

```js
import { Packager } from '@parcel/plugin';

export default new Packager({
  // ...
});
```

```js
import { Resolver } from '@parcel/plugin';

export default new Resolver({
  // ...
});
```

```js
import { Loader } from '@parcel/plugin';

export default new Loader({
  // ...
});
```

```js
import { Reporter } from '@parcel/plugin';

export default new Reporter({
  // ...
});
```

```js
import { Server } from '@parcel/plugin';

export default new Server({
  // ...
});
```
