// @flow

export type JSONValue =
  | null
  | boolean
  | number
  | string
  | Array<JSONValue>
  | JSONObject;

export type JSONObject = {
  [key: string]: JSONValue,
};

export opaque type JSONString = string;

export function serialize(value: JSONValue): JSONString {
  return JSON.stringify(value);
}

export function deserialize(value: JSONString): JSONValue {
  return JSON.parse(value);
}

export function jsonToString(value: JSONString): string {
  return value;
}

export function toJSONObject(
  value: JSONValue,
  errMsg: string = `JSON value must be an object: ${JSON.stringify(value)}`,
): JSONObject {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return value;
  } else {
    throw new Error(errMsg);
  }
}
