"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _child_process = require("child_process");

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _utilsIniFile = require("../utils/IniFile");

var _utilsIniFile2 = _interopRequireDefault(_utilsIniFile);

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _configRecalboxDefaultValuesJson = require("../../config/recalboxDefaultValues.json");

var _configRecalboxDefaultValuesJson2 = _interopRequireDefault(_configRecalboxDefaultValuesJson);

var _utilsControllerUtil = require("../utils/ControllerUtil");

var ControllerUtil = _interopRequireWildcard(_utilsControllerUtil);

/**
 * The access points of the device
 */

var Device = (function () {
    function Device() {
        _classCallCheck(this, Device);
    }

    _createClass(Device, [{
        key: "requestReboot",

        /**
         * Reboot the device
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
        value: function* requestReboot(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "POST, HEAD, OPTIONS");

            var command = (0, _child_process.spawn)("reboot");

            response.statusCode = 200;
            response.parameters = {
                success: true
            };
        }

        /**
         * Shutdown the device
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "requestShutdown",
        value: function* requestShutdown(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "POST, HEAD, OPTIONS");

            var command = (0, _child_process.spawn)("shutdown");

            response.statusCode = 200;
            response.parameters = {
                success: true
            };
        }
    }]);

    return Device;
})();

exports["default"] = Device;
module.exports = exports["default"];