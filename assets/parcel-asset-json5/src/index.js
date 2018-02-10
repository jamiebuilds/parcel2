// @flow
import json5 from 'json5';

export default {
  parse(opts) {
    return {
      ast: json5.parse(opts.fileContent)
    };
  },

  generate(opts) {
    return {
      moduleExtension: '.js',
      moduleContent: `module.exports = ${JSON.stringify(opts.ast)};`
    };
  }
};
