"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMainConfigurationParameterValue = getMainConfigurationParameterValue;
exports.getMainConfigurationParameters = getMainConfigurationParameters;
exports.setMainConfigurationParameterValue = setMainConfigurationParameterValue;
exports.listDirectory = listDirectory;
exports.uploadFile = uploadFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _IniFile = require("./IniFile");

var _IniFile2 = _interopRequireDefault(_IniFile);

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _configRecalboxDefaultValuesJson = require("../../config/recalboxDefaultValues.json");

var _configRecalboxDefaultValuesJson2 = _interopRequireDefault(_configRecalboxDefaultValuesJson);

var _Pagination = require("./Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _FileInfo = require("./FileInfo");

var _FileInfo2 = _interopRequireDefault(_FileInfo);

/**
 * Helpers for the controllers
 */

/**
 * Get a parameter value from the main configuration
 *
 * @public
 * @param   {string}                            name        The parameter name
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */

function* getMainConfigurationParameterValue(name, request, response) {
    var iniFile = new _IniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
    iniFile.setDefaultValues(_configRecalboxDefaultValuesJson2["default"]);
    var settings = {};
    settings[name] = yield iniFile.getParameterValue(name);

    response.statusCode = 200;
    response.parameters = settings;
}

/**
 * Get parameters from the main configuration
 *
 * @public
 * @param   {RegExp}                            pattern     The pattern of the parameter name
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */

function* getMainConfigurationParameters(pattern, request, response) {
    // Extract the settings from the main configuration
    var iniFile = new _IniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
    iniFile.setDefaultValues(_configRecalboxDefaultValuesJson2["default"]);
    var parameters = yield iniFile.getParameters(pattern);

    response.statusCode = 200;
    response.parameters = parameters;
}

/**
 * Set a parameter value of the main configuration
 *
 * @public
 * @param   {string}                            name        The parameter name
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */

function* setMainConfigurationParameterValue(name, request, response) {
    // Get the raw body from the request
    var iniFile = new _IniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
    var body = yield request.getRawBody();

    // Normalize the new value
    var newValue = body.toString();
    if (!isNaN(newValue)) {
        body = new Number(body);
    }

    // Update the parameter
    yield iniFile.setParameterValue(name, newValue);
}

/**
 * List files in a directory
 *
 * @public
 * @param   {string}                            path        The directory path
 * @param   {string}                            itemName    The item name found in the directory
 * @param   {object}                            options     The options
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */

function* listDirectory(path, itemName, options, request, response) {
    var max = 50;

    // Get the files
    var files = yield _solfegejs2["default"].util.Node.fs.readdir(path);
    var total = files.length;

    // Pagination
    var pagination = new _Pagination2["default"](files, max, request);
    var list = pagination.getList();
    var offset = pagination.offset;
    var limit = pagination.limit;

    // Get file informations
    var listWithMetadata = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var fileName = _step.value;

            var fileInfo = new _FileInfo2["default"](path + "/" + fileName);
            var metadata = yield fileInfo.getMetadata();
            listWithMetadata.push(metadata);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var statusCode = 200;
    if (listWithMetadata.length < total) {
        // Partial content
        statusCode = 206;
    }
    response.statusCode = statusCode;
    response.setHeader("Content-Range", offset + "-" + limit + "/" + total);
    response.setHeader("Accept-Range", itemName + " " + max);
    response.parameters = listWithMetadata;
}

/**
 * Upload a file
 *
 * @public
 * @param   {string}                            directoryPath   The directory path
 * @param   {solfege.bundle.server.Request}     request         The request
 * @param   {solfege.bundle.server.Response}    response        The response
 */

function* uploadFile(directoryPath, request, response) {
    var files = yield request.getFiles();
    var createdFiles = [];
    for (var field in files) {
        var file = files[field];
        var size = file.size;
        var _name = file.name;
        var path = file.path;

        // Move the file to the directory
        var newPath = directoryPath + "/" + _name;
        yield _solfegejs2["default"].util.Node.fs.rename(path, newPath);
        createdFiles.push(_name);
    }

    response.statusCode = 201;
    response.parameters = createdFiles;
}