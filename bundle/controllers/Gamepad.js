"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

/**
 * The access points of the virtual gamepads
 */

var Gamepad = (function () {
    function Gamepad() {
        _classCallCheck(this, Gamepad);
    }

    _createClass(Gamepad, [{
        key: "setButtonA",

        /**
         * Set the state of A button
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
        value: function* setButtonA(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

            response.statusCode = 200;
            response.parameters = {
                success: true
            };
        }

        /**
         * Set the state of B button
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setButtonB",
        value: function* setButtonB(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

            response.statusCode = 200;
            response.parameters = {
                success: true
            };
        }
    }]);

    return Gamepad;
})();

exports["default"] = Gamepad;
module.exports = exports["default"];