// @flow
import * as fg from 'fast-glob';
import * as mm from 'micromatch';

export opaque type Glob = string;

export function globToString(glob: Glob): string {
  return glob;
}
