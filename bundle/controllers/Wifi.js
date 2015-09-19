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

var _utilsControllerUtil = require("../utils/ControllerUtil");

var ControllerUtil = _interopRequireWildcard(_utilsControllerUtil);

/**
 * The access points of the Wifi configuration
 */

var Wifi = (function () {
  function Wifi() {
    _classCallCheck(this, Wifi);
  }

  _createClass(Wifi, [{
    key: "getWifi",

    /**
     * Get the Wifi settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    value: function* getWifi(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameters(/^wifi\./, request, response);
    }

    /**
     * Get the Wifi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getWifiEnabled",
    value: function* getWifiEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("wifi.enabled", request, response);
    }

    /**
     * Set the Wifi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setWifiEnabled",
    value: function* setWifiEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("wifi.enabled", request, response);

      // Display the new value
      yield this.getWifiEnabled(request, response);
    }

    /**
     * Get the Wifi "ssid" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getWifiSsid",
    value: function* getWifiSsid(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("wifi.ssid", request, response);
    }

    /**
     * Set the Wifi "ssid" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setWifiSsid",
    value: function* setWifiSsid(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("wifi.ssid", request, response);

      // Display the new value
      yield this.getWifiSsid(request, response);
    }

    /**
     * Get the Wifi "key" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getWifiKey",
    value: function* getWifiKey(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("wifi.key", request, response);
    }

    /**
     * Set the Wifi "key" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setWifiKey",
    value: function* setWifiKey(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("wifi.key", request, response);

      // Display the new value
      yield this.getWifiKey(request, response);
    }
  }]);

  return Wifi;
})();

exports["default"] = Wifi;
module.exports = exports["default"];