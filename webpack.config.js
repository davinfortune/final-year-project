const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
    resolve: {
        fallback: { 
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": false,
            "os": false,
        },
    },
plugins: [
    new NodePolyfillPlugin()
]}