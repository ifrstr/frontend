const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, './out'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader',
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
            env: {
              targets: {
                node: process.versions.node,
              },
            },
          },
        },
      },
    ],
  },
}
