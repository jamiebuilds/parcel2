// @flow
import yaml from 'js-yaml';

export default {
  parse(opts) {
    return {
      ast: yaml.safeLoad(opts.fileContent)
    };
  },

  generate(opts) {
    return {
      moduleExtension: '.js',
      moduleContent: `module.exports = ${JSON.stringify(opts.ast)};`
    };
  }
};
