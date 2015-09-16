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

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _utilsControllerUtil = require("../utils/ControllerUtil");

var ControllerUtil = _interopRequireWildcard(_utilsControllerUtil);

/**
 * The access points of the game systems
 */

var GameSystem = (function () {
    function GameSystem() {
        _classCallCheck(this, GameSystem);
    }

    _createClass(GameSystem, [{
        key: "getSystems",

        /**
         * Get the system list
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
        value: function* getSystems(request, response) {
            var list = ["atari2600", "atari7800", "fba", "fba_libretro", "fds", "gamegear", "gb", "gba", "gbc", "gw", "lutro", "lynx", "mame", "mastersystem", "megadrive", "msx", "n64", "neogeo", "nes", "ngp", "pcengine", "prboom", "psx", "scummvm", "sega32x", "segacd", "sg1000", "snes", "vectrex", "virtualboy", "wswan"];

            response.statusCode = 200;
            response.parameters = list;
        }

        /**
         * Get the rom list of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getRoms",
        value: function* getRoms(request, response) {
            var systemId = request.getParameter("id");
            var directoryPath = _configConfig2["default"].api.romsDirectoryPath + "/" + systemId;

            yield ControllerUtil.listDirectory(directoryPath, "rom", null, request, response);
        }

        /**
         * Add a ROM
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "addRom",
        value: function* addRom(request, response) {
            var systemId = request.getParameter("id");
            var directoryPath = _configConfig2["default"].api.romsDirectoryPath + "/" + systemId;

            yield ControllerUtil.uploadFile(directoryPath, request, response);
        }

        /**
         * Get a ROM informations
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getRom",
        value: function* getRom(request, response) {
            var systemId = request.getParameter("id");
            var fileName = request.getParameter("fileName");
            var directoryPath = _configConfig2["default"].api.romsDirectoryPath + "/" + systemId;

            yield ControllerUtil.getFileMetadata(directoryPath + "/" + fileName, request, response);
        }

        /**
         * Delete a ROM
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "deleteRom",
        value: function* deleteRom(request, response) {
            var systemId = request.getParameter("id");
            var fileName = request.getParameter("fileName");
            var directoryPath = _configConfig2["default"].api.romsDirectoryPath + "/" + systemId;

            yield ControllerUtil.deleteFile(directoryPath + "/" + fileName, request, response);
        }
    }]);

    return GameSystem;
})();

exports["default"] = GameSystem;
module.exports = exports["default"];