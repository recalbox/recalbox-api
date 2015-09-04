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
    }

    /**
     * Get the file content
     *
     * @public
     * @return  {string}    The content
     */

    _createClass(IniFile, [{
        key: "getContent",
        value: function* getContent() {
            var content = yield _solfegejs2["default"].util.Node.fs.readFile(this.filePath);
            content = content.toString("utf8");

            return content;
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

            var content = yield this.getContent();
            var parameters = _ini2["default"].parse(content);

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
    }]);

    return IniFile;
})();

exports["default"] = IniFile;
module.exports = exports["default"];