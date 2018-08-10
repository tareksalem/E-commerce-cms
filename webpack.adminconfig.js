const path = require("path");
module.exports = {
    entry: "./adminPublic/javascripts/src/app.js",
    output: {
        path: path.resolve(__dirname, 'adminPublic/javascripts/dist'),
        filename: 'dist.bundle.js'
    },
    // mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // plugins: ["babel-plugin-syntax-jsx"],
                            presets: ['es2017']
                        }
                    }
                ]
            }
        ]
    }
}