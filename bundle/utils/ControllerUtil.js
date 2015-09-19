"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMainConfigurationParameterValue = getMainConfigurationParameterValue;
exports.getMainConfigurationParameters = getMainConfigurationParameters;
exports.setMainConfigurationParameterValue = setMainConfigurationParameterValue;
exports.listDirectory = listDirectory;
exports.uploadFile = uploadFile;
exports.getFileMetadata = getFileMetadata;
exports.deleteFile = deleteFile;

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
 * @param   {string}                            fallback    The fallback parameter name
 */

function* getMainConfigurationParameterValue(name, request, response) {
    var fallback = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

    // Get the value
    var iniFile = new _IniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
    iniFile.setDefaultValues(_configRecalboxDefaultValuesJson2["default"]);
    var value = yield iniFile.getParameterValue(name);

    // Build the response with a fallback
    var settings = {};
    if (fallback) {
        var defaultValue = yield iniFile.getParameterValue(fallback);
        settings[name] = defaultValue;
    }
    if (value) {
        settings[name] = value;
    }

    // Render
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
    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

    // Extract the settings from the main configuration
    var iniFile = new _IniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
    iniFile.setDefaultValues(_configRecalboxDefaultValuesJson2["default"]);
    var parameters = yield iniFile.getParameters(pattern);

    // Render
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
    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

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

    // Check if the directory exists
    var exists = yield _solfegejs2["default"].util.Node.fs.exists(path);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: "Directory not found: " + path
        };
        return;
    }

    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

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
    // Check if the directory exists
    var exists = yield _solfegejs2["default"].util.Node.fs.exists(directoryPath);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: "Directory not found: " + directoryPath
        };
        return;
    }

    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

    // Get the uploaded file
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

/**
 * Get file metadata
 *
 * @public
 * @param   {string}                            filePath    The file path
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */

function* getFileMetadata(filePath, request, response) {
    // Check if the file exists
    var exists = yield _solfegejs2["default"].util.Node.fs.exists(filePath);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: "File not found: " + filePath
        };
        return;
    }

    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

    // Get file metadata
    try {
        var fileInfo = new _FileInfo2["default"](filePath);
        var metadata = yield fileInfo.getMetadata();

        response.statusCode = 200;
        response.parameters = metadata;
    } catch (error) {
        response.statusCode = 500;
        response.parameters = {
            error: error.message
        };
    }
}

/**
 * Delete a file
 *
 * @public
 * @param   {string}                            filePath    The file path
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */

function* deleteFile(filePath, request, response) {
    // Check if the file exists
    var exists = yield _solfegejs2["default"].util.Node.fs.exists(filePath);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: "File not found: " + filePath
        };
        return;
    }

    // The request is a verification
    if (request.method === "OPTIONS") {
        return;
    }

    // Delete the file
    try {
        yield _solfegejs2["default"].util.Node.fs.unlink(filePath);

        response.statusCode = 204;
    } catch (error) {
        response.statusCode = 500;
        response.parameters = {
            error: error.message
        };
    }
}