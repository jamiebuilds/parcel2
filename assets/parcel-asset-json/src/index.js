// @flow
export default {
  parse(opts) {
    return {
      ast: JSON.parse(opts.fileContent)
    };
  },

  generate(opts) {
    return {
      moduleExtension: '.js',
      moduleContent: `module.exports = ${JSON.stringify(opts.ast)};`
    };
  }
};
