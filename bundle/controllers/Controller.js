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
 * The access points of the controllers configuration
 */

var Controller = (function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "getControllerPs3",

    /**
     * Get the PS3 controllers settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    value: function* getControllerPs3(request, response) {
      yield ControllerUtil.getMainConfigurationParameters(/^controllers\.ps3\./, request, response);
    }

    /**
     * Indicates if the PS3 controllers are enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerPs3Enabled",
    value: function* getControllerPs3Enabled(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.ps3.enabled", request, response);
    }

    /**
     * Enable/disable PS3 controllers
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerPs3Enabled",
    value: function* setControllerPs3Enabled(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.ps3.enabled", request, response);

      // Display the new value
      yield this.getControllerPs3Enabled(request, response);
    }

    /**
     * Get driver used for the PS3 controllers
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerPs3Driver",
    value: function* getControllerPs3Driver(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.ps3.driver", request, response);
    }

    /**
     * Set the driver for PS3 controllers
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerPs3Driver",
    value: function* setControllerPs3Driver(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.ps3.driver", request, response);

      // Display the new value
      yield this.getControllerPs3Driver(request, response);
    }

    /**
     * Get the XBOXDRV settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerXboxdrv",
    value: function* getControllerXboxdrv(request, response) {
      yield ControllerUtil.getMainConfigurationParameters(/^controllers\.xboxdrv\./, request, response);
    }

    /**
     * Indicates if the XBOXDRV is enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerXboxdrvEnabled",
    value: function* getControllerXboxdrvEnabled(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.xboxdrv.enabled", request, response);
    }

    /**
     * Enable/disable XBOXDRV
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerXboxdrvEnabled",
    value: function* setControllerXboxdrvEnabled(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.xboxdrv.enabled", request, response);

      // Display the new value
      yield this.getControllerXboxdrvEnabled(request, response);
    }

    /**
     * Get the amount of controllers to use with XBOXDRV
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerXboxdrvNbControls",
    value: function* getControllerXboxdrvNbControls(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.xboxdrv.nbcontrols", request, response);
    }

    /**
     * Set the amount of controllers to use with xboxdrv (0..4)
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerXboxdrvNbControls",
    value: function* setControllerXboxdrvNbControls(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.xboxdrv.nbcontrols", request, response);

      // Display the new value
      yield this.getControllerXboxdrvNbControls(request, response);
    }
  }]);

  return Controller;
})();

exports["default"] = Controller;
module.exports = exports["default"];