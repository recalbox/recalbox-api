"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _utilsIniFile = require("../utils/IniFile");

var _utilsIniFile2 = _interopRequireDefault(_utilsIniFile);

var _configDefault = require("../../config/default");

var _configDefault2 = _interopRequireDefault(_configDefault);

/**
 * The access points of the Kodi configuration
 */

var Kodi = (function () {
    function Kodi() {
        _classCallCheck(this, Kodi);
    }

    _createClass(Kodi, [{
        key: "getKodi",

        /**
         * Get the Kodi settings
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
        value: function* getKodi(request, response) {
            // Extract the settings from the main configuration
            var iniFile = new _utilsIniFile2["default"](_configDefault2["default"].api.mainConfigurationFilePath);
            var parameters = yield iniFile.getParameters(/^kodi\./);

            response.statusCode = 200;
            response.parameters = parameters;
        }

        /**
         * Get the Kodi "enabled" setting
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getKodiEnabled",
        value: function* getKodiEnabled(request, response) {
            var iniFile = new _utilsIniFile2["default"](_configDefault2["default"].api.mainConfigurationFilePath);
            var settings = {
                "kodi.enabled": yield iniFile.getParameterValue("kodi.enabled", 1)
            };

            response.statusCode = 200;
            response.parameters = settings;
        }

        /**
         * Set the Kodi "enabled" setting
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setKodiEnabled",
        value: function* setKodiEnabled(request, response) {
            // Get the raw body from the request
            var iniFile = new _utilsIniFile2["default"](_configDefault2["default"].api.mainConfigurationFilePath);
            var body = yield request.getRawBody();

            // Normalize the new value
            var newValue = body.toString();
            if (!isNaN(newValue)) {
                body = new Number(body);
            }

            // Update the parameter
            yield iniFile.setParameterValue("kodi.enabled", newValue);

            // Display the new value
            yield this.getKodiEnabled(request, response);
        }
    }]);

    return Kodi;
})();

exports["default"] = Kodi;
module.exports = exports["default"];