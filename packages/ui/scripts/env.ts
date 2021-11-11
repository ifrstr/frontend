import fs from 'fs'
import path from 'path'

delete require.cache[require.resolve('./paths')]

const NODE_ENV = process.env.NODE_ENV
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.'
  )
}

const appDirectory = fs.realpathSync(process.cwd())
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter((folder) => folder && !path.isAbsolute(folder))
  .map((folder) => path.resolve(appDirectory, folder))
  .join(path.delimiter)

const REACT_APP = /^REACT_APP_/i

function getClientEnvironment() {
  const raw = Object.keys(process.env)
    .filter((key) => REACT_APP.test(key))
    .reduce(
      (
        env: { [key: string]: string },
        key: string
      ): { [key: string]: string } => {
        env[key] = process.env[key] as string
        return env
      },
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
        FAST_REFRESH: process.env.FAST_REFRESH ? 'true' : 'false',
      }
    )
  const stringified = {
    'process.env': Object.keys(raw).reduce(
      (env: { [key: string]: string }, key: string) => {
        env[key] = JSON.stringify(raw[key])
        return env
      },
      {}
    ),
  }

  return { raw, stringified }
}

export default getClientEnvironment
