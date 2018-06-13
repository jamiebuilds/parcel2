// @flow
import uuid from 'uuid/v1';

export opaque type UniqueId = string;

export function createUniqueId(): UniqueId {
  return uuid();
}

export function uniqueIdToString(uid: UniqueId): string {
  return uid;
}
