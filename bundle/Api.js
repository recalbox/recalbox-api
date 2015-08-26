"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _controllers = require("./controllers");

var _controllers2 = _interopRequireDefault(_controllers);

/**
 * The API bundle
 *
 * @class   Api
 */

var Api =
/**
 * Constructor
 */
function Api() {
  _classCallCheck(this, Api);

  // The controllers package
  this.controllers = _controllers2["default"];
};

exports["default"] = Api;
module.exports = exports["default"];