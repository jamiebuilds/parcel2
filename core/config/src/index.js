// @flow
import findUp from 'find-up';
import resolveFrom from 'resolve-from';
import * as fs from '@parcel/fs';

type JSONValue =
  | null
  | boolean
  | number
  | string
  | Array<JSONValue>
  | { [key: string]: JSONValue };

export function findClosestConfig(filePath: string): Promise<string> {
  return findUp('.parcelrc', { cwd: filePath });
}

export async function loadConfig(configPath: string): Promise<JSONValue> {
  return JSON.parse(await fs.readFile(configPath));
}

function normalizeConfig(config) {
  let errors = [];
  let extended = [];
  let assets = {};

  if (
    !(typeof config == 'object' && config !== null && !Array.isArray(config))
  ) {
    errors.push(`config must be an object`);
  } else {
    Object.keys(config).forEach(configKey => {
      let configValue = config[configKey];

      if (configKey === 'extends') {
        if (!Array.isArray(configValue)) {
          errors.push(`"extends" must be an array of strings`);
        } else {
          configValue.forEach((val, index) => {
            if (typeof val !== 'string') {
              errors.push(`"extends[${index}]" must be a string`);
            } else {
              extended.push(val);
            }
          });
        }
      } else if (configKey === 'assets') {
        if (
          !(
            typeof configValue == 'object' &&
            configValue !== null &&
            !Array.isArray(configValue)
          )
        ) {
          errors.push(
            `"assets" must be an object map of strings to arrays of strings`
          );
        } else {
          Object.keys(configValue).map(key => {
            let val = configValue[key];
            if (!Array.isArray(val)) {
              errors.push(`"assets['${key}']" must be an array of strings`);
            } else {
              assets[key] = [];
              val.forEach((v, i) => {
                if (typeof v !== 'string') {
                  errors.push(`"assets['${key}'][${i}]" must be a string`);
                } else {
                  assets[key].push(v);
                }
              });
            }
          });
        }
      } else {
        errors.push(`'${configKey}' is an unknown key`);
      }
    });
  }

  let normalized = {
    extends: extended,
    assets
  };

  return { normalized, errors };
}

export async function resolveConfig(filePath: string) {
  let configPath = await findClosestConfig(filePath);
  let config = await loadConfig(configPath);
  let { normalized, errors } = normalizeConfig(config);

  if (errors.length) {
    throw new TypeError(
      `Parcel config at "${configPath}" contains these errors:\n` +
        errors.map(error => ` - ${error}`).join('\n')
    );
  }

  let { extends: extended, assets } = normalized;

  let parentConfigs = Promise.all(
    extended.map(ext => {
      return resolveConfig(resolveFrom(configPath, ext));
    })
  );

  return {
    assets
  };
}
