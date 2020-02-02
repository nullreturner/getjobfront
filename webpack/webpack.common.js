"use strict";

const entry = require("./entry.js");
const output = require("./output.js");
const resolve = require("./resolve.js");
const _plugins = require("./plugins");
const rules = require("./rules");
 
module.exports = {
  entry,
  output,
  resolve,
  plugins: [
	  ..._plugins, 
  ],
  module: {
    rules: [
	    ...rules,
    ]
  }
};

