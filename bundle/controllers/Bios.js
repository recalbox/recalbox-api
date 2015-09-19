"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _utilsControllerUtil = require("../utils/ControllerUtil");

var ControllerUtil = _interopRequireWildcard(_utilsControllerUtil);

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
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");

            yield ControllerUtil.listDirectory(_configConfig2["default"].api.biosDirectoryPath, "bios", null, request, response);
        }

        /**
         * Add a bios
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "addBios",
        value: function* addBios(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");

            yield ControllerUtil.uploadFile(_configConfig2["default"].api.biosDirectoryPath, request, response);
        }

        /**
         * Get a file informations
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getBiosFile",
        value: function* getBiosFile(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");

            var fileName = request.getParameter("fileName");
            yield ControllerUtil.getFileMetadata(_configConfig2["default"].api.biosDirectoryPath + "/" + fileName, request, response);
        }

        /**
         * Download a file
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "downloadBiosFile",
        value: function* downloadBiosFile(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, DELETE, OPTIONS");

            var fileName = request.getParameter("fileName");
            var filePath = _configConfig2["default"].api.biosDirectoryPath + "/" + fileName;
            var exists = yield _solfegejs2["default"].util.Node.fs.exists(filePath);

            if (!exists) {
                response.statusCode = 404;
                return;
            }

            response.statusCode = 200;
            response.setHeader("Content-disposition", "attachment; filename=" + fileName);
            var fileStream = _fs2["default"].createReadStream(filePath);
            response.body = fileStream;
        }

        /**
         * Delete a file
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "deleteBiosFile",
        value: function* deleteBiosFile(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, DELETE, OPTIONS");

            var fileName = request.getParameter("fileName");
            yield ControllerUtil.deleteFile(_configConfig2["default"].api.biosDirectoryPath + "/" + fileName, request, response);
        }
    }]);

    return Bios;
})();

exports["default"] = Bios;
module.exports = exports["default"];