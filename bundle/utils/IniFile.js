"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _ini = require("ini");

var _ini2 = _interopRequireDefault(_ini);

/**
 * An util class to manipulate INI file
 */

var IniFile = (function () {
    /**
     * Constructor
     *
     * @param   {string}    filePath    The INI file path
     */

    function IniFile(filePath) {
        _classCallCheck(this, IniFile);

        // Save the file path
        this.filePath = filePath;

        // The default values
        this.defaultValues = {};
    }

    /**
     * Set the optional default values
     *
     * @param   {object}    values  the default values
     */

    _createClass(IniFile, [{
        key: "setDefaultValues",
        value: function setDefaultValues(values) {
            this.defaultValues = values;
        }

        /**
         * Get the file content
         *
         * @public
         * @return  {string}    The content
         */
    }, {
        key: "getContent",
        value: function* getContent() {
            var content = yield _solfegejs2["default"].util.Node.fs.readFile(this.filePath);
            content = content.toString("utf8");

            return content;
        }

        /**
         * Set the new file content
         *
         * @public
         * @param   {string}    content     The new content
         */
    }, {
        key: "setContent",
        value: function* setContent(content) {
            yield _solfegejs2["default"].util.Node.fs.writeFile(this.filePath, content);
        }

        /**
         * Extract parameters from the file
         *
         * @public
         * @param   {RegExp}    regexp  The pattern of the parameter name
         * @return  {object}            The parameters
         */
    }, {
        key: "getParameters",
        value: function* getParameters() {
            var regexp = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

            // Build the parameters based on the default values and the values from the INI file
            var content = yield this.getContent();
            var iniParameters = _ini2["default"].parse(content);
            var parameters = _extends(this.defaultValues, iniParameters);

            // Filter the parameters if the regexp is provided
            if (regexp instanceof RegExp) {
                var filteredParameters = {};
                for (var key in parameters) {
                    if (key.match(regexp)) {
                        filteredParameters[key] = parameters[key];
                    }
                }
                return filteredParameters;
            }

            return parameters;
        }

        /**
         * Get a parameter value
         *
         * @param   {string}        name            The parameter name
         * @param   {string|number} defaultValue    The default value
         * @return  {string|number}                 The value
         */
    }, {
        key: "getParameterValue",
        value: function* getParameterValue(name, defaultValue) {
            // Extract the value from the main configuration
            var parameters = yield this.getParameters();
            if (parameters.hasOwnProperty(name)) {
                return parameters[name];
            }

            return defaultValue;
        }

        /**
         * Set a parameter value
         *
         * @param   {string}        name    The parameter name
         * @param   {string|number} value   The new value
         */
    }, {
        key: "setParameterValue",
        value: function* setParameterValue(name, value) {
            // Get the content
            var content = yield this.getContent();

            // The pattern to find the parameter line
            var regexp = new RegExp(";?" + name + " *=.*", "im");

            // If the value is not a number,
            // then wrap the value with double quotes
            if (isNaN(value)) {
                value = _ini2["default"].safe(value);
                content = content.replace(regexp, name + "=\"" + value + "\"");
            } else {
                content = content.replace(regexp, name + "=" + value);
            }

            // Update the content
            yield this.setContent(content);
        }
    }]);

    return IniFile;
})();

exports["default"] = IniFile;
module.exports = exports["default"];