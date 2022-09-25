module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: ['js'],
          alias: {
            "@": "./src",
            // "common": "./common",
            "components": "./src/components", // TODO：待处理
          }
        }
      ]
    ]
  };
};
