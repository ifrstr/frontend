process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

import fs from 'fs-extra'
import chalk from 'chalk'
import FileSizeReporter from 'react-dev-utils/FileSizeReporter'
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages'
import printBuildError from 'react-dev-utils/printBuildError'
import webpack from 'webpack'
import paths from './paths'
import configFactory from './webpack.config'

type BuildResult = {
  stats: webpack.Stats
  previousFileSizes: FileSizeReporter.OpaqueFileSizes
  warnings: string[]
}

const config = configFactory()

async function run(): Promise<void> {
  const previousFileSizes = await FileSizeReporter.measureFileSizesBeforeBuild(
    paths.appBuild
  )
  await fs.emptyDir(paths.appBuild)
  const result = await build(previousFileSizes).catch((err) => {
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true'
    if (tscCompileOnError) {
      console.log(chalk.yellow('Compiled with the following type errors:\n'))
      printBuildError(err)
    } else {
      console.log(chalk.red('Failed to compile.\n'))
      printBuildError(err)
      process.exit(1)
    }
  })

  if (!result) return
  if (result.warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.\n'))
    console.log(result.warnings.join('\n\n'))
  } else {
    console.log(chalk.green('Compiled successfully.\n'))
  }
  FileSizeReporter.printFileSizesAfterBuild(
    result.stats,
    result.previousFileSizes,
    paths.appBuild,
    512 * 1024,
    1024 * 1024
  )
}

function build(
  previousFileSizes: FileSizeReporter.OpaqueFileSizes
): Promise<BuildResult> {
  const compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((compileErr, stats) => {
      compiler.close((closeErr) => {
        const err = compileErr || closeErr
        let messages
        if (err) {
          if (!err.message) {
            return reject(err)
          }

          let errMessage = err.message

          if (Object.prototype.hasOwnProperty.call(err, 'postcssNode')) {
            errMessage +=
              '\nCompileError: Begins at CSS selector ' +
              (err as any)['postcssNode'].selector
          }

          messages = formatWebpackMessages({
            errors: [errMessage],
            warnings: [],
          })
        } else {
          messages = formatWebpackMessages(
            stats!.toJson({ all: false, warnings: true, errors: true })
          )
        }
        if (messages.errors.length) {
          if (messages.errors.length > 1) {
            messages.errors.length = 1
          }
          return reject(new Error(messages.errors.join('\n\n')))
        }
        if (
          process.env.CI &&
          (typeof process.env.CI !== 'string' ||
            process.env.CI.toLowerCase() !== 'false') &&
          messages.warnings.length
        ) {
          console.log(
            chalk.yellow(
              '\nTreating warnings as errors because process.env.CI = true.\n' +
                'Most CI servers set it automatically.\n'
            )
          )
          return reject(new Error(messages.warnings.join('\n\n')))
        }

        const resolveArgs: BuildResult = {
          stats: stats!,
          previousFileSizes,
          warnings: messages.warnings,
        }

        return resolve(resolveArgs)
      })
    })
  })
}

run()
