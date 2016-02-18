"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A virtual gamepad
 */
class Pad {
  /**
   * Constructor
   */
  constructor() {}

  /**
   * Connect the gamepad
   */
  *connect() {
    let uinput = yield _solfegejs2.default.util.Node.fs.open("/dev/uinput", "w+");

    yield _solfegejs2.default.util.Node.fs.close(uinput);
  }
}
exports.default = Pad;
module.exports = exports['default'];