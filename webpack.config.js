const htmlWebpackPlugin = require ('html-webpack-plugin')
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin")

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

    output:{
        clean: true,
        path: path.resolve(__dirname, 'docs')
    },

    plugins:[
        new CopyPlugin({
            patterns: [
              { from: "public", to: "" },
            ],

    }),
        new htmlWebpackPlugin({
        template: path.resolve(__dirname, "src/html", "archive.html"),
        filename: 'archive.html',
        chunks: ['archive'],
        scriptLoading: 'module'
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "home.html"),
        filename: 'home.html',
        chunks: ['home'],
        scriptLoading: 'module'
    }),
    new htmlWebpackPlugin ({
        template: path.resolve(__dirname, "src/html", "index.html"),
        filename: 'index.html',
            chunks: ['main'],
            scriptLoading: 'module'
        }),
        new htmlWebpackPlugin ({
            template: path.resolve(__dirname, "src/html", "login.html"),
            filename: 'login.html',
            chunks: ['login'],
            scriptLoading: 'module'
        }),
        new htmlWebpackPlugin ({
            template: path.resolve(__dirname, "src/html", "popular.html"),
            filename: 'popular.html',
            chunks: ['popular'],
            scriptLoading: 'module'
        }),
        new htmlWebpackPlugin ({
            template: path.resolve(__dirname, "src/html", "settings.html"),
            filename: 'settings.html',
            chunks: ['settings'],
            scriptLoading: 'module'
        })], 
      
            
        module: {
            rules: [
                {
                    test: /\.(s[ac]|c)ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ],
                        plugins: ["@babel/plugin-syntax-top-level-await"],
            },
        },
    },
],

},
resolve: {
    extensions: ['.js', '.mjs']
}
};