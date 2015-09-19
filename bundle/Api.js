"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _stream = require("stream");

var _stream2 = _interopRequireDefault(_stream);

var _js2xmlparser = require("js2xmlparser");

var _js2xmlparser2 = _interopRequireDefault(_js2xmlparser);

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
            var allowMethods = response.getHeader("Access-Control-Allow-Methods");
            if (!allowMethods) {
                response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, POST, OPTIONS");
            }

            // The request is a verification
            if (request.method === "OPTIONS") {
                response.statusCode = 200;
                response.body = "";
                return;
            }

            // The body is a Stream. There is no need to format the output
            if (response.body instanceof _stream2["default"]) {
                return;
            }

            // If the body and the parameters are empty,
            // then it means that the URL doesn't exist
            // @todo Use a feature of the router to do that
            if (!response.body && (!response.parameters || Object.keys(response.parameters).length === 0)) {
                response.statusCode = 404;
                response.parameters = {
                    error: "Not found"
                };
            }

            // Convert the body to the requested format
            switch (request.acceptsTypes("json", "xml", "text")) {
                // JSON key values
                case "json":
                    response.setHeader("Content-Type", "application/json");
                    response.body = JSON.stringify(response.parameters, null, "    ");
                    break;

                // XML key values
                case "xml":
                    response.setHeader("Content-Type", "application/xml");

                    var body = undefined;
                    if (Array.isArray(response.parameters)) {
                        body = (0, _js2xmlparser2["default"])("response", { item: response.parameters });
                    } else {
                        body = (0, _js2xmlparser2["default"])("response", response.parameters);
                    }
                    /*
                    let body = `<?xml version="1.0" encoding="UTF-8" ?>\n<response>\n`;
                    for (let key in response.parameters) {
                        let value = response.parameters[key];
                        body += `<${key}>`;
                        if (!isNaN(value)) {
                            body += value;
                        } else {
                            body += `<![CDATA[${value}]]>`;
                        }
                        body += `</${key}>\n`;
                    }
                    body += `</response>`;
                    */
                    response.body = body;
                    break;

                // Plain text
                default:
                case "text":
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
            }
        }
    }]);

    return Api;
})();

exports["default"] = Api;
module.exports = exports["default"];