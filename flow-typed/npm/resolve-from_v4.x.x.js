// flow-typed signature: fd3cb4a72450f56227ea75d72f3af15d
// flow-typed version: 2e6a1b7a2b/resolve-from_v4.x.x/flow_>=v0.25.x

declare module 'resolve-from' {
  declare class ResolveFrom {
    (fromDir: string, moduleId: string): string;
    silent(fromDir: string, moduleId: string): string | null;
  }

  declare module.exports: ResolveFrom;
}
