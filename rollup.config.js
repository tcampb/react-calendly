const typescript = require("@rollup/plugin-typescript");
const commonjs = require('@rollup/plugin-commonjs')
// const resolve require('@rollup/plugin-node-resolv';
const pkg = require("./package.json")

module.exports = {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [typescript(), commonjs()],
};
