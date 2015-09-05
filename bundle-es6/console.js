import fs from "fs";
import solfege from "solfegejs";
import cli from "solfegejs-cli";
import server from "solfegejs-server";
import router from "solfegejs-server-router";
import Api from "./Api";

// Initialize the application
let application = new solfege.kernel.Application(__dirname);

// Add the external bundles
application.addBundle("console", new cli.Console);
application.addBundle("server", new server.HttpServer);
application.addBundle("router", new router.Router);

// Add the internal bundle
application.addBundle("api", new Api);

// Get the configuration
let configuration = require(__dirname + "/../config/config");

// Override the application configuration
application.overrideConfiguration(configuration);

// Start the application
application.start();

