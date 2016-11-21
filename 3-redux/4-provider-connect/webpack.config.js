module.exports = {
    entry: "./index",
    resolve: {
        modulesDirectories: [
            "."
        ]
    },
    output: {
        filename: "build/app.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ]       
    },
    watch: true
};
