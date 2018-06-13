// @flow
import { URL } from 'url';

export function toUrl(url: string): URL {
  return new URL(url);
}

export function urlToString(url: URL): string {
  return url.toString();
}
