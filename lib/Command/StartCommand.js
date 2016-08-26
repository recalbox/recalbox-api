"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ContainerAwareCommand = require("solfegejs/lib/bundles/Console/Command/ContainerAwareCommand");

var _ContainerAwareCommand2 = _interopRequireDefault(_ContainerAwareCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Start command
 */
class StartCommand extends _ContainerAwareCommand2.default {
    /**
     * Configure command
     */
    *configure() {
        this.setName("recalbox-api:start");
        this.setDescription("Start Recalbox API");
    }

    /**
     * Execute the command
     */
    *execute() {
        var container = this.getContainer();
        var serverFactory = yield container.get("http_server_factory");

        var server = serverFactory.create("recalbox-api");
        server.start(1337);

        console.info("API started");
    }
}
exports.default = StartCommand;
module.exports = exports['default'];