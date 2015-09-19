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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
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
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.xboxdrv.nbcontrols", request, response);

      // Display the new value
      yield this.getControllerXboxdrvNbControls(request, response);
    }

    /**
     * Get the GPIO settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerGpio",
    value: function* getControllerGpio(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameters(/^controllers\.gpio\./, request, response);
    }

    /**
     * Indicates if the GPIO is enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerGpioEnabled",
    value: function* getControllerGpioEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.gpio.enabled", request, response);
    }

    /**
     * Enable/disable GPIO
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerGpioEnabled",
    value: function* setControllerGpioEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.gpio.enabled", request, response);

      // Display the new value
      yield this.getControllerGpioEnabled(request, response);
    }

    /**
     * Get the arguments of mk_gpio
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerGpioArgs",
    value: function* getControllerGpioArgs(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.gpio.args", request, response);
    }

    /**
     * Set the arguments of mk_gpio
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerGpioArgs",
    value: function* setControllerGpioArgs(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.gpio.args", request, response);

      // Display the new value
      yield this.getControllerGpioArgs(request, response);
    }

    /**
     * Get the DB9 driver settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerDb9",
    value: function* getControllerDb9(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameters(/^controllers\.db9\./, request, response);
    }

    /**
     * Indicates if the DB9 driver is enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerDb9Enabled",
    value: function* getControllerDb9Enabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.db9.enabled", request, response);
    }

    /**
     * Enable/disable DB9 driver
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerDb9Enabled",
    value: function* setControllerDb9Enabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.db9.enabled", request, response);

      // Display the new value
      yield this.getControllerDb9Enabled(request, response);
    }

    /**
     * Get the arguments of DB9 driver
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerDb9Args",
    value: function* getControllerDb9Args(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.db9.args", request, response);
    }

    /**
     * Set the arguments of DB9 driver
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerDb9Args",
    value: function* setControllerDb9Args(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.db9.args", request, response);

      // Display the new value
      yield this.getControllerDb9Args(request, response);
    }

    /**
     * Get the Gamecon driver settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerGamecon",
    value: function* getControllerGamecon(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameters(/^controllers\.gamecon\./, request, response);
    }

    /**
     * Indicates if the Gamecon driver is enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerGameconEnabled",
    value: function* getControllerGameconEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.gamecon.enabled", request, response);
    }

    /**
     * Enable/disable Gamecon driver
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerGameconEnabled",
    value: function* setControllerGameconEnabled(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.gamecon.enabled", request, response);

      // Display the new value
      yield this.getControllerGameconEnabled(request, response);
    }

    /**
     * Get the arguments of Gamecon driver
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getControllerGameconArgs",
    value: function* getControllerGameconArgs(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.getMainConfigurationParameterValue("controllers.gamecon.args", request, response);
    }

    /**
     * Set the arguments of Gamecon driver
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setControllerGameconArgs",
    value: function* setControllerGameconArgs(request, response) {
      response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");
      yield ControllerUtil.setMainConfigurationParameterValue("controllers.gamecon.args", request, response);

      // Display the new value
      yield this.getControllerGameconArgs(request, response);
    }
  }]);

  return Controller;
})();

exports["default"] = Controller;
module.exports = exports["default"];