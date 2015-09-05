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

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

/**
 * The access points of the configuration
 */

var Configuration = (function () {
    function Configuration() {
        _classCallCheck(this, Configuration);
    }

    _createClass(Configuration, [{
        key: "getConfiguration",

        /**
         * Get the main configuration file
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
        value: function* getConfiguration(request, response) {
            var iniFile = new _utilsIniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
            var content = yield iniFile.getContent();
            var parameters = yield iniFile.getParameters();

            response.statusCode = 200;
            response.body = content;
            response.parameters = parameters;
        }

        /**
         * Set the main configuration file
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setConfiguration",
        value: function* setConfiguration(request, response) {
            // Get the raw body from the request
            var iniFile = new _utilsIniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
            var body = yield request.getRawBody();

            // Update the file
            var newContent = body.toString();
            yield iniFile.setContent(newContent);

            // Display the new content
            yield this.getConfiguration(request, response);
        }
    }]);

    return Configuration;
})();

exports["default"] = Configuration;
module.exports = exports["default"];