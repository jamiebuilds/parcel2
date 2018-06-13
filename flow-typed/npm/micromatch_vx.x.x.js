// flow-typed signature: 0bfa2e7e518899a980e2364d8377d1df
// flow-typed version: <<STUB>>/micromatch_v3.1.10/flow_v0.71.0

declare interface $npm$braces$Options {
  /**
   * Generate an "expanded" brace pattern (this option is unncessary with the `.expand` method, which does the same thing).
   *
   * ```js
   * console.log(braces('a/{b,c}/d', {expand: true}));
   * //=> [ 'a/b/d', 'a/c/d' ]
   * ```
   *
   * @default undefined
   */
  expand?: boolean;
  /**
   * Enabled by default.
   *
   * ```js
   * console.log(braces('a/{b,c}/d'));
   * //=> [ 'a/(b|c)/d' ]
   * ```
   *
   * @default true
   */
  optimize?: boolean;
  /**
   * Duplicates are removed by default. To keep duplicates, pass `{nodupes: false}` on the options
   *
   * @default true
   */
  nodupes?: boolean;
  /**
   * When `braces.expand()` is used, or `options.expand` is true, brace patterns will automatically be [optimized](#optionsoptimize)
   * when the difference between the range minimum and range maximum exceeds the `rangeLimit`.
   * This is to prevent huge ranges from freezing your application.
   *
   * You can set this to any number, or change `options.rangeLimit` to `Inifinity` to disable this altogether.
   *
   * @default 250
   *
   * @example
   * ```js
   * // pattern exceeds the "rangeLimit", so it's optimized automatically
   * console.log(braces.expand('{1..1000}'));
   * //=> ['([1-9]|[1-9][0-9]{1,2}|1000)']
   *
   * // pattern does not exceed "rangeLimit", so it's NOT optimized
   * console.log(braces.expand('{1..100}'));
   * //=> ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ... '89', 90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
   * ```
   */
  rangeLimit?: number;
  /**
   * Customize range expansion.
   *
   * ```js
   * var range = braces.expand('x{a..e}y', {
   *   transform: function(str) {
   *     return 'foo' + str;
   *   }
   * });
   *
   * console.log(range);
   * //=> [ 'xfooay', 'xfooby', 'xfoocy', 'xfoody', 'xfooey' ]
   * ```
   *
   * @default undefined
   */
  transform?: (str: string) => string;
  /**
   * In regular expressions, quanitifiers can be used to specify how many times a token can be repeated. For example, `a{1,3}` will match the letter `a` one to three times.
   *
   * Unfortunately, regex quantifiers happen to share the same syntax as [Bash lists](#lists)
   *
   * The `quantifiers` option tells braces to detect when [regex quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers)
   * are defined in the given pattern, and not to try to expand them as lists.
   *
   * @default undefined
   *
   * @example
   * ```js
   * var braces = require('braces');
   * console.log(braces('a/b{1,3}/{x,y,z}'));
   * //=> [ 'a/b(1|3)/(x|y|z)' ]
   * console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true}));
   * //=> [ 'a/b{1,3}/(x|y|z)' ]
   * console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true, expand: true}));
   * //=> [ 'a/b{1,3}/x', 'a/b{1,3}/y', 'a/b{1,3}/z' ]
   * ```
   */
  quantifiers?: boolean;
  /**
   * Strip backslashes that were used for escaping from the result.
   *
   * @default undefined
   */
  unescape?: boolean;
}

declare module 'micromatch' {
  declare interface Options {
    /**
     * Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.
     *
     * @default false
     *
     * @example
     * ```js
     * mm(['a/b.js', 'a/c.md'], '*.js');
     * //=> []
     *
     * mm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
     * //=> ['a/b.js']
     * ```
     */
    basename?: boolean;
    /**
     * Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression.
     * Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**.
     * Instead, the star is treated the same as an other star.
     *
     * @default true
     *
     * @example
     * ```js
     * var files = ['abc', 'ajz'];
     * console.log(mm(files, '[a-c]*'));
     * //=> ['abc', 'ajz']
     *
     * console.log(mm(files, '[a-c]*', {bash: false}));
     * ```
     */
    bash?: boolean;
    /**
     * Disable regex and function memoization.
     *
     * @default undefined
     */
    cache?: boolean;
    /**
     * Match dotfiles. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `dot`.
     *
     * @default false
     */
    dot?: boolean;
    /**
     * Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.
     *
     * @default undefined
     */
    failglob?: boolean;
    /**
     * String or array of glob patterns to match files to ignore.
     *
     * @default undefined
     */
    ignore?: string | string[];
    /**
     * Alias for [options.basename](#options-basename).
     */
    matchBase?: boolean;
    /**
     * Disable expansion of brace patterns. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nobrace`.
     *
     * @default undefined
     */
    nobrace?: boolean;
    /**
     * Use a case-insensitive regex for matching files. Same behavior as [minimatch](https://github.com/isaacs/minimatch).
     *
     * @default undefined
     */
    nocase?: boolean;
    /**
     * Remove duplicate elements from the result array.
     *
     * @default undefined
     *
     * @example
     * Example of using the `unescape` and `nodupes` options together:
     *
     * ```js
     * mm.match(['a/b/c', 'a/b/c'], 'a/b/c');
     * //=> ['a/b/c', 'a/b/c']
     *
     * mm.match(['a/b/c', 'a/b/c'], 'a/b/c', {nodupes: true});
     * //=> ['abc']
     * ```
     */
    nodupes?: boolean;
    /**
     * Disable extglob support, so that extglobs are regarded as literal characters.
     *
     * @default undefined
     *
     * @example
     * ```js
     * mm(['a/z', 'a/b', 'a/!(z)'], 'a/!(z)');
     * //=> ['a/b', 'a/!(z)']
     *
     * mm(['a/z', 'a/b', 'a/!(z)'], 'a/!(z)', {noext: true});
     * //=> ['a/!(z)'] (matches only as literal characters)
     * ```
     */
    noext?: boolean;
    /**
     * Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.
     *
     * @default undefined
     */
    nonegate?: boolean;
    /**
     * Disable matching with globstars (`**`).
     *
     * @default undefined
     */
    noglobstar?: boolean;
    /**
     * Alias for [options.nullglob](#options-nullglob).
     */
    nonull?: boolean;
    /**
     * If `true`, when no matches are found the actual (arrayified) glob pattern is returned instead of an empty array.
     * Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nonull`.
     *
     * @default undefined
     */
    nullglob?: boolean;
    /**
     * Pass your own instance of [snapdragon](https://github.com/jonschlinkert/snapdragon), to customize parsers or compilers.
     *
     * @default undefined
     */
    snapdragon?: Object;
    /**
     * Generate a source map by enabling the `sourcemap` option with the `.parse`, `.compile`, or `.create` methods.
     *
     * _(Note that sourcemaps are currently not enabled for brace patterns)_
     *
     * @example
     * ``` js
     * var mm = require('micromatch');
     * var pattern = '*(*(of*(a)x)z)';
     *
     * var res = mm.create('abc/*.js', {sourcemap: true});
     * console.log(res.map);
     * // { version: 3,
     * //   sources: [ 'string' ],
     * //   names: [],
     * //   mappings: 'AAAA,GAAG,EAAC,iBAAC,EAAC,EAAE',
     * //   sourcesContent: [ 'abc/*.js' ] }
     *
     * var ast = mm.parse('abc/**\/*.js');
     * var res = mm.compile(ast, {sourcemap: true});
     * console.log(res.map);
     * // { version: 3,
     * //   sources: [ 'string' ],
     * //   names: [],
     * //   mappings: 'AAAA,GAAG,EAAC,2BAAE,EAAC,iBAAC,EAAC,EAAE',
     * //   sourcesContent: [ 'abc/**\/*.js' ] }
     *
     * var ast = mm.parse(pattern);
     * var res = mm.compile(ast, {sourcemap: true});
     * console.log(res.map);
     * // { version: 3,
     * //   sources: [ 'string' ],
     * //   names: [],
     * //   mappings: 'AAAA,CAAE,CAAE,EAAE,CAAE,CAAC,EAAC,CAAC,EAAC,CAAC,EAAC',
     * //   sourcesContent: [ '*(*(of*(a)x)z)' ] }
     * ```
     */
    sourcemap?: boolean;
    /**
     * Remove backslashes from returned matches.
     *
     * @default undefined
     *
     * @example
     * In this example we want to match a literal `*`:
     *
     * ```js
     * mm.match(['abc', 'a\\*c'], 'a\\*c');
     * //=> ['a\\*c']
     *
     * mm.match(['abc', 'a\\*c'], 'a\\*c', {unescape: true});
     * //=> ['a*c']
     * ```
     */
    unescape?: boolean;
    /**
     * Convert path separators on returned files to posix/unix-style forward slashes.
     *
     * @default true
     *
     * @example
     * ```js
     * mm.match(['a\\b\\c'], 'a/**');
     * //=> ['a/b/c']
     *
     * mm.match(['a\\b\\c'], {unixify: false});
     * //=> ['a\\b\\c']
     * ```
     */
    unixify?: boolean;
  }

  declare interface Micromatch {
    /**
     * The main function takes a list of strings and one or more glob patterns to use for matching.
     *
     * @param list A list of strings to match
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of matches
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm(list, patterns[, options]);
     *
     * console.log(mm(['a.js', 'a.txt'], ['*.js']));
     * //=> [ 'a.js' ]
     * ```
     */
    (list: string[], patterns: string | string[], options?: Options): string[];

    /**
     * Similar to the main function, but `pattern` must be a string.
     *
     * @param list Array of strings to match
     * @param pattern Glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of matches
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.match(list, pattern[, options]);
     *
     * console.log(mm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a'));
     * //=> ['a.a', 'a.aa']
     * ```
     */
    match(list: string[], pattern: string, options?: Options): string[];

    /**
     * Returns true if the specified `string` matches the given glob `pattern`.
     *
     * @param string String to match
     * @param pattern Glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if the string matches the glob pattern.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.isMatch(string, pattern[, options]);
     *
     * console.log(mm.isMatch('a.a', '*.a'));
     * //=> true
     * console.log(mm.isMatch('a.b', '*.a'));
     * //=> false
     * ```
     */
    isMatch(string: string, pattern: string, options?: Options): boolean;

    /**
     * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
     *
     * @param list The string or array of strings to test. Returns as soon as the first match is found.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.some(list, patterns[, options]);
     *
     * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
     * // true
     * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
     * // false
     * ```
     */
    some(
      list: string | string[],
      patterns: string | string[],
      options?: Options,
    ): boolean;

    /**
     * Returns true if every string in the given `list` matches any of the given glob `patterns`.
     *
     * @param list The string or array of strings to test.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.every(list, patterns[, options]);
     *
     * console.log(mm.every('foo.js', ['foo.js']));
     * // true
     * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
     * // true
     * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
     * // false
     * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
     * // false
     * ```
     */
    every(
      list: string | string[],
      patterns: string | string[],
      options?: Options,
    ): boolean;

    /**
     * Returns true if **any** of the given glob `patterns` match the specified `string`.
     *
     * @param str The string to test.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.any(string, patterns[, options]);
     *
     * console.log(mm.any('a.a', ['b.*', '*.a']));
     * //=> true
     * console.log(mm.any('a.a', 'b.*'));
     * //=> false
     * ```
     */
    any(
      str: string | string[],
      patterns: string | string[],
      options?: Options,
    ): boolean;

    /**
     * Returns true if **all** of the given `patterns` match the specified string.
     *
     * @param str The string to test.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if any patterns match `str`
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.all(string, patterns[, options]);
     *
     * console.log(mm.all('foo.js', ['foo.js']));
     * // true
     *
     * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
     * // false
     *
     * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
     * // true
     *
     * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
     * // true
     * ```
     */
    all(
      str: string | string[],
      patterns: string | string[],
      options?: Options,
    ): boolean;

    /**
     * Returns a list of strings that _**do not match any**_ of the given `patterns`.
     *
     * @param list Array of strings to match.
     * @param patterns One or more glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of strings that **do not match** the given patterns.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.not(list, patterns[, options]);
     *
     * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
     * //=> ['b.b', 'c.c']
     * ```
     */
    not(
      list: string[],
      patterns: string | string[],
      options?: Options,
    ): string[];

    /**
     * Returns true if the given `string` contains the given pattern. Similar to [.isMatch](#isMatch) but the pattern can match any part of the string.
     *
     * @param str The string to match.
     * @param patterns Glob pattern to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns true if the patter matches any part of `str`.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.contains(string, pattern[, options]);
     *
     * console.log(mm.contains('aa/bb/cc', '*b'));
     * //=> true
     * console.log(mm.contains('aa/bb/cc', '*d'));
     * //=> false
     * ```
     */
    contains(
      str: string,
      patterns: string | string[],
      options?: Options,
    ): boolean;

    /**
     * Filter the keys of the given object with the given `glob` pattern and `options`. Does not attempt to match nested keys.
     * If you need this feature, use [glob-object](https://github.com/jonschlinkert/glob-object) instead.
     *
     * @param object The object with keys to filter.
     * @param patterns One or more glob patterns to use for matching.
     * @param options See available options for changing how matches are performed
     * @returns Returns an object with only keys that match the given patterns.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.matchKeys(object, patterns[, options]);
     *
     * var obj = { aa: 'a', ab: 'b', ac: 'c' };
     * console.log(mm.matchKeys(obj, '*b'));
     * //=> { ab: 'b' }
     * ```
     */
    matchKeys<T>(
      object: T,
      patterns: string | string[],
      options?: Options,
    ): $Shape<T>;

    /**
     * Returns a memoized matcher function from the given glob `pattern` and `options`. The returned function takes a string to match as its only argument and returns true if the string is a match.
     *
     * @param pattern Glob pattern
     * @param options See available options for changing how matches are performed.
     * @returns Returns a matcher function.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.matcher(pattern[, options]);
     *
     * var isMatch = mm.matcher('*.!(*a)');
     * console.log(isMatch('a.a'));
     * //=> false
     * console.log(isMatch('a.b'));
     * //=> true
     * ```
     */
    matcher(pattern: string, options?: Options): (str: string) => boolean;

    /**
     * Returns an array of matches captured by `pattern` in `string, or`null` if the pattern did not match.
     *
     * @param pattern Glob pattern to use for matching.
     * @param string String to match
     * @param options See available options for changing how matches are performed
     * @returns Returns an array of captures if the string matches the glob pattern, otherwise `null`.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.capture(pattern, string[, options]);
     *
     * console.log(mm.capture('test/*.js', 'test/foo.js'));
     * //=> ['foo']
     * console.log(mm.capture('test/*.js', 'foo/bar.css'));
     * //=> null
     * ```
     */
    capture(
      pattern: string,
      string: string,
      options?: Options,
    ): string[] | null;

    /**
     * Create a regular expression from the given glob `pattern`.
     *
     * @param pattern A glob pattern to convert to regex.
     * @param options See available options for changing how matches are performed.
     * @returns Returns a regex created from the given pattern.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.makeRe(pattern[, options]);
     *
     * console.log(mm.makeRe('*.js'));
     * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
     * ```
     */
    makeRe(pattern: string, options?: Options): RegExp;

    /**
     * Expand the given brace `pattern`.
     *
     * @param pattern String with brace pattern to expand.
     * @param options Any options to change how expansion is performed. See the [braces](https://github.com/micromatch/braces) library for all available options.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * console.log(mm.braces('foo/{a,b}/bar'));
     * //=> ['foo/(a|b)/bar']
     *
     * console.log(mm.braces('foo/{a,b}/bar', {expand: true}));
     * //=> ['foo/(a|b)/bar']
     * ```
     */
    braces(pattern: string, options?: $npm$braces$Options): string[];

    /**
     * Parses the given glob `pattern` and returns an array of abstract syntax trees (ASTs), with the compiled `output` and optional source `map` on each AST.
     *
     * @param pattern Glob pattern to parse and compile.
     * @param options Any options to change how parsing and compiling is performed.
     * @returns Returns an object with the parsed AST, compiled string and optional source map.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.create(pattern[, options]);
     *
     * console.log(mm.create('abc/*.js'));
     * // [{ options: { source: 'string', sourcemap: true },
     * //   state: {},
     * //   compilers:
     * //    { ... },
     * //   output: '(\\.[\\\\\\/])?abc\\/(?!\\.)(?=.)[^\\/]*?\\.js',
     * //   ast:
     * //    { type: 'root',
     * //      errors: [],
     * //      nodes:
     * //       [ ... ],
     * //      dot: false,
     * //      input: 'abc/*.js' },
     * //   parsingErrors: [],
     * //   map:
     * //    { version: 3,
     * //      sources: [ 'string' ],
     * //      names: [],
     * //      mappings: 'AAAA,GAAG,EAAC,kBAAC,EAAC,EAAE',
     * //      sourcesContent: [ 'abc/*.js' ] },
     * //   position: { line: 1, column: 28 },
     * //   content: {},
     * //   files: {},
     * //   idx: 6 }]
     * ```
     */
    create(pattern: string, options?: Options): Object;

    /**
     * Parse the given `str` with the given `options`.
     *
     * @returns Returns an AST
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.parse(pattern[, options]);
     *
     * var ast = mm.parse('a/{b,c}/d');
     * console.log(ast);
     * // { type: 'root',
     * //   errors: [],
     * //   input: 'a/{b,c}/d',
     * //   nodes:
     * //    [ { type: 'bos', val: '' },
     * //      { type: 'text', val: 'a/' },
     * //      { type: 'brace',
     * //        nodes:
     * //         [ { type: 'brace.open', val: '{' },
     * //           { type: 'text', val: 'b,c' },
     * //           { type: 'brace.close', val: '}' } ] },
     * //      { type: 'text', val: '/d' },
     * //      { type: 'eos', val: '' } ] }
     * ```
     */
    parse(str: string, options?: Options): Object;

    /**
     * Compile the given `ast` or string with the given `options`.
     *
     * @returns Returns an object that has an `output` property with the compiled string.
     *
     * @example
     * ```js
     * var mm = require('micromatch');
     * mm.compile(ast[, options]);
     *
     * var ast = mm.parse('a/{b,c}/d');
     * console.log(mm.compile(ast));
     * // { options: { source: 'string' },
     * //   state: {},
     * //   compilers:
     * //    { eos: [Function],
     * //      noop: [Function],
     * //      bos: [Function],
     * //      brace: [Function],
     * //      'brace.open': [Function],
     * //      text: [Function],
     * //      'brace.close': [Function] },
     * //   output: [ 'a/(b|c)/d' ],
     * //   ast:
     * //    { ... },
     * //   parsingErrors: [] }
     * ```
     */
    compile(ast: Object | string, options?: Options): Object;

    /**
     * Clear the regex cache.
     *
     * @example
     * ```js
     * mm.clearCache();
     * ```
     */
    clearCache(): void;
  }

  declare module.exports: Micromatch;
}
