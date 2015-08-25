import solfege from "solfegejs";
import cli from "solfegejs-cli";
import server from "solfegejs-server";
import Api from "./Api";

// Initialize the application
let application = new solfege.kernel.Application(__dirname);

// Add the external bundles
application.addBundle("console", new cli.Console);
application.addBundle("server", new server.HttpServer);

// Add the internal bundle
application.addBundle("api", new Api);

//let configuration = require(__dirname + "/../config/default");
//application.overrideConfiguration(configuration);

// Start the application
application.start();

