// @flow
import { type JSONObject } from './json';
import { type SemanticVersion } from './version';

export interface AST {
  parser: string;
  parserVersion: SemanticVersion;
  tokens?: Array<JSONObject>;
  tree: JSONObject;
}
