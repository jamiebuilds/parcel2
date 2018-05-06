# Plugin Naming

All plugins must follow a naming system:

```
{prefix}{type}-{name}
```

The `{prefix}` must be one of the following:

| Plugin Type | Plugin Name                   |
| ----------- | ----------------------------- |
| Built-ins   | `@parcel/{type}-{name}`       |
| Community   | `parcel-{type}-{name}`        |
| Scoped      | `@scope/parcel-{type}-{name}` |

The `{type}` matches the type of plugin that it is:

| Plugin Type | Plugin Name                |
| ----------- | -------------------------- |
| Transform   | `{prefix}transform-{name}` |
| Packager    | `{prefix}packager-{name}`  |
| Loader      | `{prefix}loader-{name}`    |
| Reporter    | `{prefix}reporter-{name}`  |
| Resolver    | `{prefix}resolver-{name}`  |
| Server      | `{prefix}server-{name}`    |
| Config      | `{prefix}config-{name}`    |

The `{name}` must be descriptive and directly related to the purpose of the package. Someone should be able to have an idea of what the package does simply by reading the name in a `.parcelrc` or `package.json#devDependencies`.

```
parcel-transform-html
parcel-packager-wasm
parcel-loader-css
parcel-reporter-graph-visualizer
```

If your plugin adds support for a specific tool, please use the name of the tool.

| Name                     | Correct? |
| ------------------------ | -------- |
| `parcel-transform-es6`   | No ❌    |
| `parcel-transform-babel` | Yes ✅   |

If the plugin name you want is taken, try to get more descriptive:

| Name                           | Correct? |
| ------------------------------ | -------- |
| `parcel-transform-sass-modern` | No ❌    |
| `parcel-transform-sass-dart`   | Yes ✅   |

We ask that community members work together and when things like forks happen to try and resolve them.

If someone made a better version of your plugin, please consider giving the better package name over, make a major version bump, and redirect people to the new tool.

If plugin authors do make a best effort to follow the Parcel naming rules, plugins may be blacklisted with a warning to users in the future. Parcel may direct them to an issue URL or to another plugin.

```
Warning: The plugin “parcel-transform-typescript” has a faster version at “parcel-transform-typescript-fast” that you should use. Please upvote this issue to transfer the package name: https://github.com/user/parcel-transform-typescript/issues/42
```
