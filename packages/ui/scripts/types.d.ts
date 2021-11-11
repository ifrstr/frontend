declare module 'react-dev-utils/ModuleScopePlugin' {
  class ModuleScopePlugin {
    constructor(
      appSrc: string | ReadonlyArray<string>,
      allowedFiles?: ReadonlyArray<string>
    )
    apply: (resolver: any) => void
  }

  export = ModuleScopePlugin
}

declare module 'react-dev-utils/ModuleNotFoundPlugin' {
  class ModuleNotFoundPlugin {
    constructor(appPath: string, yarnLockFile?: string)
    apply: (resolver: any) => void
  }

  export = ModuleNotFoundPlugin
}
