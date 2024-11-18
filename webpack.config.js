const htmlWebpackPlugin = require ('html-webpack-plugin')
const path = require("path")

module.exports = {
    entry: {
        main: '/src//index.js',
        archive: '/src/javascript/archive.js',
        home: '/src/javascript/home.js',
        login: '/src/javascript/login.js',
        popular: '/src/javascript/popular.js',
        settings: '/src/javascript/settings.js',

    },
    mode: "production",
    plugins: [new htmlWebpackPlugin({
        template: path.resolve(__dirname, "src/html", "archive.html"),
            filename: 'archive.html',
            chunks: ['archive.js']
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "home.html"),
             filename: 'home.html',
             chunks: ['home.js']
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "index.html"),
            filename: 'index.html',
            chunks: ['main.js']
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "login.html"),
            filename: 'login.html',
            chunks: ['login.js']
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "popular.html"),
            filename: 'popular.html',
            chunks: ['popular.js']
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "settings.html"),
            filename: 'settings.html',
            chunks: ['settings.js']
    })],

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
        
    },
};