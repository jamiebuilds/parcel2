// flow-typed signature: 3a5d0bfb4bee244e654a319010605da7
// flow-typed version: <<STUB>>/fast-glob_v2.2.1/flow_v0.71.0

import { type Stats } from 'fs';

declare module 'fast-glob' {
  declare interface IEntry extends Stats {
    path: string;
    depth: number;
  }

  declare type EntryItem = string | IEntry;
  declare type Entry = IEntry;

  declare type Pattern = string;
  declare type PatternRe = RegExp;

  declare type TransformFunction<T> = (entry: EntryItem) => T;

  declare interface Task {
    base: string;
    dynamic: boolean;
    patterns: Array<Pattern>;
    positive: Array<Pattern>;
    negative: Array<Pattern>;
  }

  declare interface Options<T: EntryItem> {
    /**
     * The current working directory in which to search.
     */
    cwd: string;
    /**
     * The deep option can be set to true to traverse the entire directory structure,
     * or it can be set to a number to only traverse that many levels deep.
     */
    deep: number | boolean;
    /**
     * Add an array of glob patterns to exclude matches.
     */
    ignore: Array<Pattern>;
    /**
     * Allow patterns to match filenames starting with a period (files & directories),
     * even if the pattern does not explicitly have a period in that spot.
     */
    dot: boolean;
    /**
     * Return `fs.Stats` with `path` property instead of file path.
     */
    stats: boolean;
    /**
     * Return only files.
     */
    onlyFiles: boolean;
    /**
     * Return only directories.
     */
    onlyDirectories: boolean;
    /**
     * Follow symlinked directories when expanding `**` patterns.
     */
    followSymlinkedDirectories: boolean;
    /**
     * Prevent duplicate results.
     */
    unique: boolean;
    /**
     * Add a `/` character to directory entries.
     */
    markDirectories: boolean;
    /**
     * Return absolute paths for matched entries.
     */
    absolute: boolean;
    /**
     * Disable expansion of brace patterns.
     */
    nobrace: boolean;
    /**
     * Enable expansion of brace patterns.
     */
    brace: boolean;
    /**
     * Disable matching with globstars (`**`).
     */
    noglobstar: boolean;
    /**
     * Enable matching with globstars (`**`).
     */
    globstar: boolean;
    /**
     * Disable extglob support, so that extglobs are regarded as literal characters.
     */
    noext: boolean;
    /**
     * Enable extglob support, so that extglobs are regarded as literal characters.
     */
    extension: boolean;
    /**
     * Disable a case-insensitive regex for matching files.
     */
    nocase: boolean;
    /**
     * Enable a case-insensitive regex for matching files.
     */
    case: boolean;
    /**
     * Allow glob patterns without slashes to match a file path based on its basename.
     * For example, `a?b` would match the path `/xyz/123/acb`, but not `/xyz/acb/123`.
     */
    matchBase: boolean;
    /**
     * Allows you to transform a path or `fs.Stats` object before sending to the array.
     */
    transform: TransformFunction<T> | null;
  }

  declare type PartialOptions<T: EntryItem> = $Shape<Options<T>>;

  declare interface FastGlob {
    <T: EntryItem>(
      patterns: Pattern | Array<Pattern>,
      options?: PartialOptions<T>,
    ): Promise<Array<T>>;

    async<T: EntryItem>(
      patterns: Pattern | Array<Pattern>,
      options?: PartialOptions<T>,
    ): Promise<Array<T>>;

    sync<T: EntryItem>(
      patterns: Pattern | Array<Pattern>,
      options?: PartialOptions<T>,
    ): Array<T>;

    stream<T: EntryItem>(
      patterns: Pattern | Array<Pattern>,
      options?: PartialOptions<T>,
    ): stream$Readable;

    generateTasks<T: EntryItem>(
      patterns: Pattern | Array<Pattern>,
      options?: PartialOptions<T>,
    ): Array<Task>;
  }

  declare module.exports: FastGlob;
}
