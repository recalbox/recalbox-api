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

var _utilsIniFile = require("../utils/IniFile");

var _utilsIniFile2 = _interopRequireDefault(_utilsIniFile);

var _configConfig = require("../../config/config");

var _configConfig2 = _interopRequireDefault(_configConfig);

var _configRecalboxDefaultValuesJson = require("../../config/recalboxDefaultValues.json");

var _configRecalboxDefaultValuesJson2 = _interopRequireDefault(_configRecalboxDefaultValuesJson);

var _utilsControllerUtil = require("../utils/ControllerUtil");

var ControllerUtil = _interopRequireWildcard(_utilsControllerUtil);

/**
 * The access points of the configuration
 */

var Configuration = (function () {
  function Configuration() {
    _classCallCheck(this, Configuration);
  }

  _createClass(Configuration, [{
    key: "getConfiguration",

    /**
     * Get the main configuration file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    value: function* getConfiguration(request, response) {
      var iniFile = new _utilsIniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
      iniFile.setDefaultValues(_configRecalboxDefaultValuesJson2["default"]);

      var content = yield iniFile.getContent();
      var parameters = yield iniFile.getParameters();

      response.statusCode = 200;
      response.body = content;
      response.parameters = parameters;
    }

    /**
     * Set the main configuration file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setConfiguration",
    value: function* setConfiguration(request, response) {
      // Get the raw body from the request
      var iniFile = new _utilsIniFile2["default"](_configConfig2["default"].api.mainConfigurationFilePath);
      var body = yield request.getRawBody();

      // Update the file
      var newContent = body.toString();
      yield iniFile.setContent(newContent);

      // Display the new content
      yield this.getConfiguration(request, response);
    }

    /**
     * Get the hostname
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getHostname",
    value: function* getHostname(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("system.hostname", request, response);
    }

    /**
     * Set the hostname
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setHostname",
    value: function* setHostname(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("system.hostname", request, response);

      // Display the new value
      yield this.getHostname(request, response);
    }

    /**
     * Get the locale
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getLocale",
    value: function* getLocale(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("system.language", request, response);
    }

    /**
     * Set the locale
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setLocale",
    value: function* setLocale(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("system.language", request, response);

      // Display the new value
      yield this.getLocale(request, response);
    }

    /**
     * Get the keyboard layout
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getKeyboardLayout",
    value: function* getKeyboardLayout(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("system.kblayout", request, response);
    }

    /**
     * Set the keyboard layout
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setKeyboardLayout",
    value: function* setKeyboardLayout(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("system.kblayout", request, response);

      // Display the new value
      yield this.getKeyboardLayout(request, response);
    }

    /**
     * Get the timezone
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getTimezone",
    value: function* getTimezone(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("system.timezone", request, response);
    }

    /**
     * Set the timezone
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setTimezone",
    value: function* setTimezone(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("system.timezone", request, response);

      // Display the new value
      yield this.getTimezone(request, response);
    }

    /**
     * Indicates if the updates are enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getUpdatesEnabled",
    value: function* getUpdatesEnabled(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("updates.enabled", request, response);
    }

    /**
     * Enable/disable the updates
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setUpdatesEnabled",
    value: function* setUpdatesEnabled(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("updates.enabled", request, response);

      // Display the new value
      yield this.getUpdatesEnabled(request, response);
    }
  }]);

  return Configuration;
})();

exports["default"] = Configuration;
module.exports = exports["default"];