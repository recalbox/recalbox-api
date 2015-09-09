"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainConfigurationParameterValue = getMainConfigurationParameterValue;
exports.getMainConfigurationParameters = getMainConfigurationParameters;
exports.setMainConfigurationParameterValue = setMainConfigurationParameterValue;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _IniFile = require("./IniFile");

var _IniFile2 = _interopRequireDefault(_IniFile);

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _configRecalboxDefaultValuesJson = require("../../config/recalboxDefaultValues.json");

var _configRecalboxDefaultValuesJson2 = _interopRequireDefault(_configRecalboxDefaultValuesJson);

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