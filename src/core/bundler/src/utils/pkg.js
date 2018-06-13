// @flow
import * as globs from './glob';
import * as semver from './semver';
import * as json from './json';

export opaque type PackageName = string;

export type DepMap = {
  [key: PackageName]: semver.SemanticVersionRange,
};

export class Package {
  pkg: json.JSONObject;

  constructor(pkg: json.JSONValue) {
    this.pkg = json.toJSONObject(pkg, 'package.json must be an object');
  }
}

// interface Package {
//   name: string;
//   version: string;
//   source?: boolean | FilePath | Array<FilePath>;
//   [target: TargetName]: ModuleSpecifier;
//   engines?: {
//     [engine: string]: SemanticVersionRange
//   };
//   targets?: {
//     [target: TargetName]: {
//       mode?: string,
//       node?: SemanticVersionRange,
//       browsers?: Array<string>
//     }
//   };
// }
