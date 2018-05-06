// @flow
import fs from 'fs';
import promisify from 'typeable-promisify';

export function readFile(filePath: string): Promise<string> {
  return promisify(cb => fs.readFile(filePath, 'utf-8', cb));
}
