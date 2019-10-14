const webpack = require("webpack");
const clientConfig = require("./webpack.client.config");


module.exports = function setupDevServer(app){
    clientConfig.entry.app = [
        "webpack-hot-middleware/client",
        clientConfig.entry.app
    ];
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
