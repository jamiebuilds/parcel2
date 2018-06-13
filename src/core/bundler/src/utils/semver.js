// @flow
import * as semver from 'semver';

export opaque type SemanticVersion = string;
export opaque type SemanticVersionRange = string;

export function toSemanticVersion(str: string): SemanticVersion {
  if (semver.valid(str)) {
    return str;
  } else {
    throw new Error(`Invalid semantic version: ${String(str)}`);
  }
}

export function toSemanticVersionRange(str: string): SemanticVersionRange {
  if (semver.validRange(str)) {
    return str;
  } else {
    throw new Error(`Invalid semantic version range: ${String(str)}`);
  }
}

export function semanticVersionToString(semver: SemanticVersion): string {
  return semver;
}

export function semanticVersionRangeToString(
  semverRange: SemanticVersionRange,
): string {
  return semverRange;
}
