const webpack = require("webpack");
const clientConfig = require("./webpack.client.config");


module.exports = function setupDevServer(app){
    //This will make the server receive notifications when the bundle rebuilds
    clientConfig.entry.app = [
        "webpack-hot-middleware/client",
        clientConfig.entry.app
    ];
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
    // Instantiate webpack with our configuration.
    const clientCompiler = webpack(clientConfig);
    // Extends express server with this two new middleware modules
    app.use(
        require("webpack-dev-middleware")(clientCompiler, {
            stats: {
                colors: true
            }
        })
    );
    app.use(require("webpack-hot-middleware")(clientCompiler));
}
