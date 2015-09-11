"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var Api = (function () {
    /**
     * Constructor
     */

    function Api() {
        _classCallCheck(this, Api);

        // The controllers package
        this.controllers = _controllers2["default"];
    }

    /**
     * Format the response
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     * @param   {GeneratorFunction}                 next        The next function
     */

    _createClass(Api, [{
        key: "formatMiddleware",
        value: function* formatMiddleware(request, response, next) {
            // Execute the next middleware
            yield* next;

            // Allow cross domain access
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, POST");

            // Convert the body to the requested format
            // @todo The request should provide the accepted formats
            var format = request.getHeader("Content-Type");
            if (!format) {
                var acceptedFormats = request.getHeader("Accept");
                if (acceptedFormats) {
                    var acceptedFormatsSplit = acceptedFormats.split(",");
                    format = acceptedFormatsSplit[0].trim();
                }
            }
            switch (format) {
                // Plain text
                default:
                case "text":
                case "text/plain":
                    response.setHeader("Content-Type", "text/plain");

                    // If the body is empty, then use the parameters
                    if (!response.body && response.parameters) {
                        var _body = "";
                        for (var key in response.parameters) {
                            _body += key + "=" + response.parameters[key] + "\n";
                        }
                        response.body = _body;
                    }
                    break;

                // XML key values
                case "xml":
                case "text/xml":
                case "application/xml":
                    response.setHeader("Content-Type", "application/xml");

                    var body = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<response>\n";
                    for (var key in response.parameters) {
                        var value = response.parameters[key];
                        body += "<" + key + ">";
                        if (!isNaN(value)) {
                            body += value;
                        } else {
                            body += "<![CDATA[" + value + "]]>";
                        }
                        body += "</" + key + ">\n";
                    }
                    body += "</response>";
                    response.body = body;
                    break;

                // JSON key values
                case "json":
                case "text/json":
                case "application/json":
                    response.setHeader("Content-Type", "application/json");
                    response.body = JSON.stringify(response.parameters, null, "    ");
                    break;
            }
        }
    }]);

    return Api;
})();

exports["default"] = Api;
module.exports = exports["default"];