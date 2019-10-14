const baseConfig  = require("./webpack.base.config");

const config = Object.assign({}, baseConfig, {
   plugins: baseConfig.plugins || []
});

module.exports = config;
