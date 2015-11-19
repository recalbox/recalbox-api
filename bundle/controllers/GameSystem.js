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

var _utilsControllerUtil = require("../utils/ControllerUtil");

var ControllerUtil = _interopRequireWildcard(_utilsControllerUtil);

var _utilsIniFile = require("../utils/IniFile");

var _utilsIniFile2 = _interopRequireDefault(_utilsIniFile);

var _configRecalboxDefaultValuesJson = require("../../config/recalboxDefaultValues.json");

var _configRecalboxDefaultValuesJson2 = _interopRequireDefault(_configRecalboxDefaultValuesJson);

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
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
            var list = ["atari2600", "atari7800", "fba", "fba_libretro", "fds", "gamegear", "gb", "gba", "gbc", "gw", "lutro", "lynx", "mame", "mastersystem", "megadrive", "msx", "n64", "neogeo", "nes", "ngp", "pcengine", "prboom", "psx", "scummvm", "sega32x", "segacd", "sg1000", "snes", "vectrex", "virtualboy", "wswan"];

            response.statusCode = 200;
            response.parameters = list;
        }

        /**
         * Get the default system settings
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemsDefault",
        value: function* getSystemsDefault(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
            yield ControllerUtil.getMainConfigurationParameters(/^global\./, request, response);
        }

        /**
         * Get the default video mode
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemsDefaultVideoMode",
        value: function* getSystemsDefaultVideoMode(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.getMainConfigurationParameterValue("global.videomode", request, response);
        }

        /**
         * Set the default video mode
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemsDefaultVideoMode",
        value: function* setSystemsDefaultVideoMode(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.setMainConfigurationParameterValue("global.videomode", request, response);

            // Display the new value
            yield this.getSystemsDefaultVideoMode(request, response);
        }

        /**
         * Get the default shaders
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemsDefaultShaders",
        value: function* getSystemsDefaultShaders(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.getMainConfigurationParameterValue("global.shaders", request, response);
        }

        /**
         * Set the default shaders
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemsDefaultShaders",
        value: function* setSystemsDefaultShaders(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.setMainConfigurationParameterValue("global.shaders", request, response);

            // Display the new value
            yield this.getSystemsDefaultShaders(request, response);
        }

        /**
         * Get the default ratio
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemsDefaultRatio",
        value: function* getSystemsDefaultRatio(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.getMainConfigurationParameterValue("global.ratio", request, response);
        }

        /**
         * Set the default ratio
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemsDefaultRatio",
        value: function* setSystemsDefaultRatio(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.setMainConfigurationParameterValue("global.ratio", request, response);

            // Display the new value
            yield this.getSystemsDefaultRatio(request, response);
        }

        /**
         * Get the default smooth setting
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemsDefaultSmooth",
        value: function* getSystemsDefaultSmooth(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.getMainConfigurationParameterValue("global.smooth", request, response);
        }

        /**
         * Set the default smooth setting
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemsDefaultSmooth",
        value: function* setSystemsDefaultSmooth(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.setMainConfigurationParameterValue("global.smooth", request, response);

            // Display the new value
            yield this.getSystemsDefaultSmooth(request, response);
        }

        /**
         * Get the default rewind setting
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemsDefaultRewind",
        value: function* getSystemsDefaultRewind(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.getMainConfigurationParameterValue("global.rewind", request, response);
        }

        /**
         * Set the default rewind setting
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemsDefaultRewind",
        value: function* setSystemsDefaultRewind(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            yield ControllerUtil.setMainConfigurationParameterValue("global.rewind", request, response);

            // Display the new value
            yield this.getSystemsDefaultRewind(request, response);
        }

        /**
         * Get the system settings
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystem",
        value: function* getSystem(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
            var systemId = request.getParameter("id");

            // Extract the settings from the main configuration
            var iniFile = new _utilsIniFile2["default"](request.configuration.mainConfigurationFilePath);
            iniFile.setDefaultValues(_configRecalboxDefaultValuesJson2["default"]);
            var globalParameters = yield iniFile.getParameters(/^global\./);
            var systemParameters = yield iniFile.getParameters(new RegExp("^" + systemId + "."));

            // Merge the values
            var parameters = {};
            for (var key in globalParameters) {
                var newKey = key.replace("global", systemId);
                parameters[newKey] = globalParameters[key];
            }
            for (var key in systemParameters) {
                if (systemParameters[key]) {
                    parameters[key] = systemParameters[key];
                }
            }

            response.statusCode = 200;
            response.parameters = parameters;
        }

        /**
         * Get the video mode of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemVideoMode",
        value: function* getSystemVideoMode(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".videomode";
            var fallbackName = "global.videomode";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response, fallbackName);
        }

        /**
         * Set the video mode of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemVideoMode",
        value: function* setSystemVideoMode(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".videomode";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemVideoMode(request, response);
        }

        /**
         * Get the shaders of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemShaders",
        value: function* getSystemShaders(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".shaders";
            var fallbackName = "global.shaders";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response, fallbackName);
        }

        /**
         * Set the shaders of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemShaders",
        value: function* setSystemShaders(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".shaders";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemShaders(request, response);
        }

        /**
         * Get the ratio of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemRatio",
        value: function* getSystemRatio(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".ratio";
            var fallbackName = "global.ratio";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response, fallbackName);
        }

        /**
         * Set the ratio of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemRatio",
        value: function* setSystemRatio(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".ratio";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemRatio(request, response);
        }

        /**
         * Get the smooth setting of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemSmooth",
        value: function* getSystemSmooth(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".smooth";
            var fallbackName = "global.smooth";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response, fallbackName);
        }

        /**
         * Set the smooth setting of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemSmooth",
        value: function* setSystemSmooth(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".smooth";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemSmooth(request, response);
        }

        /**
         * Get the rewind setting of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemRewind",
        value: function* getSystemRewind(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".rewind";
            var fallbackName = "global.rewind";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response, fallbackName);
        }

        /**
         * Set the rewind setting of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemRewind",
        value: function* setSystemRewind(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".rewind";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemRewind(request, response);
        }

        /**
         * Get the emulator of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemEmulator",
        value: function* getSystemEmulator(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".emulator";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response);
        }

        /**
         * Set the emulator of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemEmulator",
        value: function* setSystemEmulator(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".emulator";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemEmulator(request, response);
        }

        /**
         * Get the core of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "getSystemCore",
        value: function* getSystemCore(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".core";

            yield ControllerUtil.getMainConfigurationParameterValue(parameterName, request, response);
        }

        /**
         * Set the core of the specified system
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "setSystemCore",
        value: function* setSystemCore(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
            var systemId = request.getParameter("id");
            var parameterName = systemId + ".core";

            yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

            // Display the new value
            yield this.getSystemCore(request, response);
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
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");

            var systemId = request.getParameter("id");
            var directoryPath = request.configuration.romsDirectoryPath + "/" + systemId;

            // Display the file list
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
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");

            var systemId = request.getParameter("id");
            var directoryPath = request.configuration.romsDirectoryPath + "/" + systemId;

            // Upload the file
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
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");

            var systemId = request.getParameter("id");
            var fileName = request.getParameter("fileName");
            var directoryPath = request.configuration.romsDirectoryPath + "/" + systemId;

            yield ControllerUtil.getFileMetadata(directoryPath + "/" + fileName, request, response);
        }

        /**
         * Download a ROM
         *
         * @public
         * @param   {solfege.bundle.server.Request}     request     The request
         * @param   {solfege.bundle.server.Response}    response    The response
         */
    }, {
        key: "downloadRom",
        value: function* downloadRom(request, response) {
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, DELETE, OPTIONS");

            var systemId = request.getParameter("id");
            var fileName = request.getParameter("fileName");
            var filePath = request.configuration.romsDirectoryPath + "/" + systemId + "/" + fileName;

            // Check if the file exists
            var exists = yield _solfegejs2["default"].util.Node.fs.exists(filePath);
            if (!exists) {
                response.statusCode = 404;
                response.parameters = {
                    error: "File not found: " + filePath
                };
                return;
            }

            // Read the file
            response.statusCode = 200;
            response.setHeader("Content-disposition", "attachment; filename=" + fileName);
            var fileStream = _fs2["default"].createReadStream(filePath);
            response.body = fileStream;
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
            response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, DELETE, OPTIONS");

            var systemId = request.getParameter("id");
            var fileName = request.getParameter("fileName");
            var directoryPath = request.configuration.romsDirectoryPath + "/" + systemId;

            yield ControllerUtil.deleteFile(directoryPath + "/" + fileName, request, response);
        }
    }]);

    return GameSystem;
})();

exports["default"] = GameSystem;
module.exports = exports["default"];