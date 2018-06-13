// @flow

export type TransformPlugin = {|
  parse?: () => Promise<void>,
  dependencies?: () => Promise<void>,
  transform?: () => Promise<void>,
  generate?: () => Promise<void>,
|};

export class Transform {
  constructor(plugin: TransformPlugin) {
    // ...
  }
}

export type PackagerPlugin = {|
  package?: () => Promise<void>,
|};

export class Packager {
  constructor(plugin: PackagerPlugin) {
    // ...
  }
}

export type ResolverPlugin = {|
  resolve?: () => Promise<void>,
|};

export class Resolver {
  constructor(plugin: ResolverPlugin) {
    // ...
  }
}

export type StrategyPlugin = {|
  merge?: () => Promise<void>,
|};

export class Strategy {
  constructor(plugin: StrategyPlugin) {
    // ...
  }
}

export type LoaderPlugin = {|
  generate?: () => Promise<void>,
|};

export class Loader {
  constructor(plugin: LoaderPlugin) {
    // ...
  }
}

export type ReporterPlugin = {|
  report?: () => Promise<void>,
|};

export class Reporter {
  constructor(plugin: ReporterPlugin) {
    // ...
  }
}
