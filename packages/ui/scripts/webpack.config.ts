/// <reference types="./types" />

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import postcssNormalize from 'postcss-normalize'
// import safePostCssParser from 'postcss-safe-parser'
import getCSSModuleLocalIdent from 'react-dev-utils/getCSSModuleLocalIdent'
import ModuleNotFoundPlugin from 'react-dev-utils/ModuleNotFoundPlugin'
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin'
import resolve from 'resolve'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import Webpackbar from 'webpackbar'
import getClientEnvironment from './env'
import paths from './paths'

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

function getStyleLoaders(
  cssOptions: any,
  preProcessor?: string
): webpack.RuleSetUse {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            postcssNormalize(),
          ],
        },
        sourceMap: true,
      },
    },
  ]
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: true,
          root: paths.appSrc,
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      }
    )
  }
  return loaders
}

const webpackConfig = (): webpack.Configuration => ({
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: [paths.appIndexJs, paths.appIndexCss],
  output: {
    path: paths.appBuild,
    pathinfo: false,
    filename: '[name].js',
    devtoolModuleFilenameTemplate: (info: { absoluteResourcePath: string }) =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
    globalObject: 'this',
    library: { type: 'commonjs2' },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 2017,
          },
          compress: {
            ecma: 5,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: false,
          keep_fnames: false,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CSSMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: ['default', { minifyFontValues: { removeQuotes: false } }],
          processorOptions: {
            // parser: safePostCssParser,
            map: {
              inline: false,
              annotation: true,
            },
          },
        },
      }),
    ],
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat([]),
    extensions: [
      '.web.mjs',
      '.mjs',
      '.web.js',
      '.js',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
    alias: {
      'react-native': 'react-native-web',
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [
        paths.appPackageJson,
        require.resolve('react-dev-utils/refreshOverlayInterop'),
      ]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'assets/[name].[ext]',
            },
          },
          {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('swc-loader'),
            options: {
              jsc: {
                externalHelpers: true,
                target: 'es5',
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  dynamicImport: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    pragma: 'React.createElement',
                    pragmaFrag: 'React.Fragment',
                    throwIfNamespace: true,
                    useBuiltins: true,
                  },
                  optimizer: {
                    simplify: false,
                    globals: {
                      typeofs: {
                        window: 'undefined',
                      },
                    },
                  },
                },
              },
              module: {
                type: 'commonjs',
                strict: false,
                strictMode: true,
                lazy: false,
                noInterop: false,
                ignoreDynamic: false,
              },
            },
          },
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: true,
            }),
            sideEffects: true,
          },
          {
            test: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: true,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
            }),
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 3,
                sourceMap: true,
              },
              'sass-loader'
            ),
            sideEffects: true,
          },
          {
            test: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 3,
                sourceMap: true,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
              'sass-loader'
            ),
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'assets/[name].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    new Webpackbar({
      reporters: ['fancy', 'profile'],
      profile: true,
    }),
    new ModuleNotFoundPlugin(paths.appPath),
    new webpack.DefinePlugin(getClientEnvironment().stringified),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
    }),
    // Moment.js
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: paths.appNodeModules,
      }),
      async: false,
      checkSyntacticErrors: true,
      tsconfig: paths.appTsConfig,
      reportFiles: [
        '../**/src/**/*.{ts,tsx}',
        '**/src/**/*.{ts,tsx}',
        '!**/src/**/__tests__/**',
        '!**/src/**/?(*.)(spec|test).*',
        '!**/src/setupProxy.*',
        '!**/src/setupTests.*',
      ],
      silent: true,
      formatter: 'codeframe',
    }),
  ],
  performance: false,
})

export default webpackConfig
