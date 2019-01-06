let a = require('a');
// let b = require('b');
let c = require('c');
a();
// b();
c();

require.ensure(["c"], function(require) {
  let b = require("b");
  var c = require('c');
  var d = require("d");
  b();
  c();
  d();
});