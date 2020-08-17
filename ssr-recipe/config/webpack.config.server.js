const paths = require("./paths");

module.export = {
    mode: "production",
    entry: "paths.ssrIndexJs",
    target: "node",
    output: {
        path: paths.ssrBuild,
        filename: "server.js",
        chunkFilename: "js/[name].chunk.js",
        // publicPath: paths.servedPath,
    },
};
