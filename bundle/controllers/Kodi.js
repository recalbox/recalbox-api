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
 * The access points of the Kodi configuration
 */

var Kodi = (function () {
  function Kodi() {
    _classCallCheck(this, Kodi);
  }

  _createClass(Kodi, [{
    key: "getKodi",

    /**
     * Get the Kodi settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    value: function* getKodi(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");

      yield ControllerUtil.getMainConfigurationParameters(/^kodi\./, request, response);
    }

    /**
     * Get the Kodi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getKodiEnabled",
    value: function* getKodiEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

      yield ControllerUtil.getMainConfigurationParameterValue("kodi.enabled", request, response);
    }

    /**
     * Set the Kodi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setKodiEnabled",
    value: function* setKodiEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

      yield ControllerUtil.setMainConfigurationParameterValue("kodi.enabled", request, response);

      // Display the new value
      yield this.getKodiEnabled(request, response);
    }

    /**
     * Get the Kodi "atstartup" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getKodiAtstartup",
    value: function* getKodiAtstartup(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

      yield ControllerUtil.getMainConfigurationParameterValue("kodi.atstartup", request, response);
    }

    /**
     * Set the Kodi "atstartup" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setKodiAtstartup",
    value: function* setKodiAtstartup(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

      yield ControllerUtil.setMainConfigurationParameterValue("kodi.atstartup", request, response);

      // Display the new value
      yield this.getKodiAtstartup(request, response);
    }

    /**
     * Get the Kodi "xbutton" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getKodiXbutton",
    value: function* getKodiXbutton(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

      yield ControllerUtil.getMainConfigurationParameterValue("kodi.xbutton", request, response);
    }

    /**
     * Set the Kodi "xbutton" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setKodiXbutton",
    value: function* setKodiXbutton(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

      yield ControllerUtil.setMainConfigurationParameterValue("kodi.xbutton", request, response);

      // Display the new value
      yield this.getKodiXbutton(request, response);
    }
  }]);

  return Kodi;
})();

exports["default"] = Kodi;
module.exports = exports["default"];