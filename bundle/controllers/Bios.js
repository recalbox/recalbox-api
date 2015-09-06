"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _utilsPagination = require("../utils/Pagination");

var _utilsPagination2 = _interopRequireDefault(_utilsPagination);

/**
 * The access points of the BIOS
 */

var Bios = (function () {
    function Bios() {
        _classCallCheck(this, Bios);
    }

    _createClass(Bios, [{
        key: "listBios",

        /**
         * List the bios
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
        value: function* listBios(request, response) {
            var max = 50;

            // Get the files
            var directoryPath = _configConfig2["default"].api.biosDirectoryPath;
            var files = yield _solfegejs2["default"].util.Node.fs.readdir(directoryPath);
            var total = files.length;

            // Pagination
            var pagination = new _utilsPagination2["default"](files, max, request);
            var list = pagination.getList();
            var offset = pagination.offset;
            var limit = pagination.limit;

            var statusCode = 200;
            if (list.length < total) {
                // Partial content
                statusCode = 206;
            }
            response.statusCode = statusCode;
            response.setHeader("Content-Range", offset + "-" + limit + "/" + total);
            response.setHeader("Accept-Range", "bios " + max);
            response.parameters = list;
        }
    }]);

    return Bios;
})();

exports["default"] = Bios;
module.exports = exports["default"];