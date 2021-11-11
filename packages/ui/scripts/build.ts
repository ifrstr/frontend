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

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

const config = configFactory()

measureFileSizesBeforeBuild(paths.appBuild)
  .then((previousFileSizes) => {
    fs.emptyDirSync(paths.appBuild)
    return build(previousFileSizes)
  })
  .then(
    (result: BuildResult) => {
      if (result.warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'))
        console.log(result.warnings.join('\n\n'))
        console.log(
          '\nSearch for the ' +
            chalk.underline(chalk.yellow('keywords')) +
            ' to learn more about each warning.'
        )
        console.log(
          'To ignore, add ' +
            chalk.cyan('// eslint-disable-next-line') +
            ' to the line before.\n'
        )
      } else {
        console.log(chalk.green('Compiled successfully.\n'))
      }

      console.log('File sizes after gzip:\n')
      printFileSizesAfterBuild(
        result.stats,
        result.previousFileSizes,
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      )
    },
    (err) => {
      const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true'
      if (tscCompileOnError) {
        console.log(
          chalk.yellow(
            'Compiled with the following type errors (you may want to check these before deploying your app):\n'
          )
        )
        printBuildError(err)
      } else {
        console.log(chalk.red('Failed to compile.\n'))
        printBuildError(err)
        process.exit(1)
      }
    }
  )
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  })

// Create the production build and print the deployment instructions.
function build(
  previousFileSizes: FileSizeReporter.OpaqueFileSizes
): Promise<BuildResult> {
  console.log('Creating an optimized production build...')

  const compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages
      if (err) {
        if (!err.message) {
          return reject(err)
        }

        let errMessage = err.message

        // Add additional information for postcss errors
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
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
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
}
