// @flow
import toml from 'toml';

export default {
  parse(opts) {
    return {
      ast: toml.parse(opts.fileContent)
    };
  },

  generate(opts) {
    return {
      moduleExtension: '.js',
      moduleContent: `module.exports = ${JSON.stringify(opts.ast)};`
    };
  }
};
