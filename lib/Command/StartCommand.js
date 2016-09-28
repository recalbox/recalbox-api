"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Start command
 */
class StartCommand {
  /**
   * Constructor
   *
   * @param   {object}    serverFactory   HTTP server factory
   */
  constructor(serverFactory) {
    this.serverFactory = serverFactory;
  }

  /**
   * Get command name
   *
   * @return  {string}    Command name
   */
  getName() {
    return "recalbox-api:start";
  }

  /**
   * Get description
   *
   * @return  {string}    Command description
   */
  getDescription() {
    return "Start Recalbox API";
  }

  /**
   * Execute the command
   */
  *execute() {
    var server = this.serverFactory.create("recalbox-api");
    server.start(1337);

    console.info("API started");
  }
}
exports.default = StartCommand;
module.exports = exports['default'];