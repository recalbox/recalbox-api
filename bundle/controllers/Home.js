"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _sdlJoystick = require("../../build/Release/sdl-joystick.node");

var _sdlJoystick2 = _interopRequireDefault(_sdlJoystick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The home controller
 */
class Home {
  /**
   * The homepage
   *
   * @public
   * @param   {solfege.bundle.server.Request}     request     The request
   * @param   {solfege.bundle.server.Response}    response    The response
   */
  *index(request, response) {
    let count = _sdlJoystick2.default.getJoystickCount();

    response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    response.setHeader('Content-Type', 'text/plain');
    response.statusCode = 200;
    response.body = "Recalbox API " + count;
    response.parameters = ["Recalbox API"];
  }
}
exports.default = Home;
module.exports = exports['default'];