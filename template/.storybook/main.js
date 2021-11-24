const path = require('path');
const appWebpack = require(path.join(process.cwd(), 'webpack.common.js'));

module.exports = {
    'stories': [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
    ],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: /\.scss$/,
                        use: [
                            'style-loader',
                            'css-loader?modules=false',
                            'sass-loader',
                        ],
                        // Any *.styles.scss files will be modularized
                        exclude: /\.styles\.scss$/,
                    },
                    {
                        test: /\.styles\.scss$/,
                        use: [
                            'style-loader',
                            'css-loader?modules=true&localIdentName=[path][name]__[local]',
                            'sass-loader',
                        ],
                    },
                ],
            },
            resolve: {
                ...config.resolve,
                alias: appWebpack.resolve.alias,
            }
        };
    }
}