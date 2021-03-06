const { root } = require('./helpers');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const tsconfigs = {
  client: root('./src/tsconfig.browser.json'),
  server: root('./src/tsconfig.server.json')
};

const aotTsconfigs = {
  client: root('./src/tsconfig.browser.aot.json'),
  server: root('./src/tsconfig.server.aot.json')
};

/**
 * Generates a AotPlugin for @ngtools/webpack
 *
 * @param {string} platform Should either be client or server
 * @param {boolean} aot Enables/Disables AoT Compilation
 * @returns
 */
function getAotPlugin(platform, aot) {
  return new AngularCompilerPlugin({
    tsConfigPath: aot ? aotTsconfigs[platform] : tsconfigs[platform],
    skipCodeGeneration: !aot,
    skipMetadataEmit: aot,
    // skipCodeGeneration: false,
    // skipMetadataEmit: false,
    sourceMap: false,
    typeChecking: false
  });
}

module.exports = {
  getAotPlugin: getAotPlugin
};
