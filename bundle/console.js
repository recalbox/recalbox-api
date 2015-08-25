"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _solfegejsCli = require("solfegejs-cli");

var _solfegejsCli2 = _interopRequireDefault(_solfegejsCli);

var _solfegejsServer = require("solfegejs-server");

var _solfegejsServer2 = _interopRequireDefault(_solfegejsServer);

var _Api = require("./Api");

var _Api2 = _interopRequireDefault(_Api);

// Initialize the application
var application = new _solfegejs2["default"].kernel.Application(__dirname);

// Add the external bundles
application.addBundle("console", new _solfegejsCli2["default"].Console());
application.addBundle("server", new _solfegejsServer2["default"].HttpServer());

// Add the internal bundle
application.addBundle("api", new _Api2["default"]());

var configuration = require(__dirname + "/../config/default");
application.overrideConfiguration(configuration);

// Start the application
application.start();