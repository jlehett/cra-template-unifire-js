const path = require('path');
const appWebpack = require(path.join(process.cwd(), 'webpack.common.js'));

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    "core": {
        "builder": "webpack5"
    },
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
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false
                                }
                            },
                            'sass-loader',
                        ],
                        // Any *.styles.scss files will be modularized
                        exclude: /\.styles\.scss$/,
                    },
                    {
                        test: /\.styles\.scss$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[path][name]__[local]'
                                    }
                                }
                            },
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