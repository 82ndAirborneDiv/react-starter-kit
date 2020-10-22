const path = require('path');

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        overlay: {
          warnings: false,
          errors: true
        }
    },
    module: {
        rules: [
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]'
                }
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  {
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                ]
              },
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ]
    }
};