// @flow

type Id = string;
type TargetName = string;

type FilePath = string;
type FileType = string;

type ModuleSpecifier = string;

interface Asset {
  id: Id;
  filePath: FilePath;
  sourcePath: FilePath;
  sourceText: string;
}

// ./node_modules/foo -> ../../../foo
//                        \-> bar
// ./x/node_modules/foo/../../../foo
// ./y/node_modules/foo/../../../foo
// ./z/node_modules/foo/../../../foo
//
// ./node_modules/bar -> ./index.js

interface ParsedAsset extends Asset {
  sourceAst: AST;
}

interface TransformedAsset extends ParsedAsset {
  transformedAst: AST;
}

interface DepAsset extends TransformedAsset {
  dependencies: Array<AssetDependency>;
}

interface GeneratedAsset extends TransformedAsset {
  generatedText: string;
}

interface ResolvedAsset extends TransformedAsset {
  resolvedDependencies: Map<AssetDependency, Asset>;
}

interface Location {
  line: number;
  column: number;
}

interface LocationRange {
  start: Location;
  end: Location;
}

interface AssetDependency {
  sourceAssetId: Id;
  moduleSpecifier: ModuleSpecifier; // import "moduleSpecifier"
  async: boolean; // import("...")
  entry: boolean; // <iframe src="...">
  inline: boolean; // sass @import
  optional: boolean; // try { require("...") } catch {}
  blocking: boolean; // css-blocks dep
  loc?: LocationRange; // for errors
}

interface Bundle {
  bundleId: Id;
  fileType: FileType;
  filePath: FilePath;

  entryAssetIds: Array<Id>;
  assetIds: Array<Id>;

  parentBundleId: Id;
  childBundleIds: Array<Id>;

  fileSize: number;
  buildTime: number;
  assetOffsets: Map<Id, number>;
}

interface Package {
  name: string;
  version: string;
  source?: boolean | FilePath | Array<FilePath>;
  [target: TargetName]: ModuleSpecifier;
  engines?: {
    [engine: string]: SemanticVersionRange,
  };
  targets?: {
    [target: TargetName]: {
      mode?: string,
      node?: SemanticVersionRange,
      browsers?: Array<string>,
    },
  };
}

interface ParcelConfig {
  extends?: Array<ModuleSpecifier>;
  resolver?: ModuleSpecifier;
  servers?: Array<ModuleSpecifier>;
  transforms?: {
    [glob: Glob]: Array<ModuleSpecifier>,
  };
  packagers?: {
    [glob: Glob]: ModuleSpecifier,
  };
  loaders?: {
    [glob: Glob]: ModuleSpecifier,
  };
  reporters?: Array<ModuleSpecifier>;
}
