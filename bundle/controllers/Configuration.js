"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _ini = require("ini");

var _ini2 = _interopRequireDefault(_ini);

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
            // Get the content of the main configuration
            var content = yield this.getMainConfigurationContent();

            // Parse the content and extract the parameters
            var parameters = _ini2["default"].parse(content);

            // Write the response
            response.statusCode = 200;
            response.body = content;
            response.parameters = parameters;
        }

        /**
         * Get the Kodi settings
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getKodi",
        value: function* getKodi(request, response) {
            var settings = {};

            // Extract the settings from the main configuration
            var parameters = yield this.getMainConfigurationParameters();
            var regexp = /^kodi\./;
            for (var key in parameters) {
                if (key.match(regexp)) {
                    settings[key] = parameters[key];
                }
            }

            response.statusCode = 200;
            response.parameters = settings;
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
            var settings = {
                "kodi.enabled": yield this.getMainConfigurationSetting("kodi.enabled", 1)
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
            // @todo
            response.statusCode = 200;
            response.body = "done";
        }

        /**
         * Get the main configuration content
         *
         * @private
         * @return  {string}    The content
         */
    }, {
        key: "getMainConfigurationContent",
        value: function* getMainConfigurationContent() {
            // Get the content of the main configuration
            var content = yield _solfegejs2["default"].util.Node.fs.readFile("/recalbox/share/system/recalbox.conf");
            content = content.toString("utf8");

            return content;
        }

        /**
         * Get the main configuration parameters
         *
         * @private
         * @return  {object}    The parameters
         */
    }, {
        key: "getMainConfigurationParameters",
        value: function* getMainConfigurationParameters() {
            var content = yield this.getMainConfigurationContent();
            var parameters = _ini2["default"].parse(content);

            return parameters;
        }

        /**
         * Get a setting value from the main configuration
         *
         * @param   {string}        name            The setting name
         * @param   {string|number} defaultValue    The default value
         */
    }, {
        key: "getMainConfigurationSetting",
        value: function* getMainConfigurationSetting(name, defaultValue) {
            // Extract the value from the main configuration
            var parameters = yield this.getMainConfigurationParameters();
            if (parameters.hasOwnProperty(name)) {
                return parameters[name];
            }

            return defaultValue;
        }
    }]);

    return Configuration;
})();

exports["default"] = Configuration;
module.exports = exports["default"];