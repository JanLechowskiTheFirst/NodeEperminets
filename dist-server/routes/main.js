"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // ..stuff below


var _default = router;
exports["default"] = _default;
var app = (0, _express["default"])();
var ads = [{
  title: 'Hello, world (again)!'
}]; // defining an endpoint to return all ads

app.get('/', function (req, res) {
  res.send(ads);
});