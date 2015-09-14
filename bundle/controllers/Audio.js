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
 * The access points of the audio configuration
 */

var Audio = (function () {
  function Audio() {
    _classCallCheck(this, Audio);
  }

  _createClass(Audio, [{
    key: "getAudio",

    /**
     * Get the audio settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    value: function* getAudio(request, response) {
      yield ControllerUtil.getMainConfigurationParameters(/^audio\./, request, response);
    }

    /**
     * Get the audio "device" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getAudioDevice",
    value: function* getAudioDevice(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("audio.device", request, response);
    }

    /**
     * Set the audio "device" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setAudioDevice",
    value: function* setAudioDevice(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("audio.device", request, response);

      // Display the new value
      yield this.getAudioDevice(request, response);
    }

    /**
     * Get the volume
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getAudioVolume",
    value: function* getAudioVolume(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("audio.volume", request, response);
    }

    /**
     * Set the volume
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setAudioVolume",
    value: function* setAudioVolume(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("audio.volume", request, response);

      // Display the new value
      yield this.getAudioVolume(request, response);
    }

    /**
     * Indicates if the background music is enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "getAudioBackgroundMusic",
    value: function* getAudioBackgroundMusic(request, response) {
      yield ControllerUtil.getMainConfigurationParameterValue("audio.bgmusic", request, response);
    }

    /**
     * Enable/disable the background music
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
  }, {
    key: "setAudioBackgroundMusic",
    value: function* setAudioBackgroundMusic(request, response) {
      yield ControllerUtil.setMainConfigurationParameterValue("audio.bgmusic", request, response);

      // Display the new value
      yield this.getAudioBackgroundMusic(request, response);
    }
  }]);

  return Audio;
})();

exports["default"] = Audio;
module.exports = exports["default"];