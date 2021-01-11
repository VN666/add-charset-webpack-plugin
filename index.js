"use strict";

class addCharsetWebpackPlugin {
    constructor (options) {
        this.charset = options.charset || "utf-8";
    }

    apply (compiler) {
        compiler.hooks.emit.tapAsync("addCharsetWebpackPlugin", (compilation, callback) => {
            for (const fileName of Object.keys(compilation.assets)) {
                if (!/\.css$/.test(fileName)) continue;

                let source = compilation.assets[fileName].source();

                source = source.includes("@charset") ? source : `@charset "${this.charset}";${source}`;

                compilation.assets[fileName] = {
                    source: () => source,
                    size: () => this.source().length
                }
            }

            callback();
        });
    }
}

module.exports = addCharsetWebpackPlugin;
