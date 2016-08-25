"use strict";

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _solfegejsServer = require("solfegejs-server");

var _solfegejsServer2 = _interopRequireDefault(_solfegejsServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var application = _solfegejs2.default.factory();
application.addBundle(new _solfegejsServer2.default());

application.start();