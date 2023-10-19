const typescript = require("@rollup/plugin-typescript");
const commonjs = require('@rollup/plugin-commonjs')
const pkg = require("./package.json")
const postcss = require('rollup-plugin-postcss');
const external = require('rollup-plugin-peer-deps-external');

module.exports = {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named"
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named"
    },
  ],
  plugins: [external(), postcss(), typescript(), commonjs()],
};
