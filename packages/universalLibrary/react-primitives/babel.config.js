module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["react-native"],
    plugins: [
      "transform-object-rest-spread",
      [
        "module-resolver",
        {
          "alias": {
            "react-primitives": "./"
          },
          "cwd": "babelrc"
        }
      ]
    ]
  };
};
