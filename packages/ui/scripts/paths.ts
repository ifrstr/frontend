import fs from 'fs'
import path from 'path'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath: string): string =>
  path.resolve(appDirectory, relativePath)

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
]

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appIndexJs: resolveApp('src/index.ts'),
  appIndexCss: resolveApp('src/styles/global/index.css'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp('node_modules'),
}

export { moduleFileExtensions }
