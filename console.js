"use strict"

const solfege = require("solfegejs");
const ServerBundle = require("solfegejs-server");
const RouterBundle = require("solfegejs-server-router");
const ForeverBundle = require("solfegejs-forever");
const RecalboxApiBundle = require("./lib/Bundle");

let application = solfege.factory();
application.addBundle(new ServerBundle);
application.addBundle(new RouterBundle);
application.addBundle(new ForeverBundle);
application.addBundle(new RecalboxApiBundle);

application.loadConfigurationFile(`${__dirname}/config/production.yml`, "yaml");

application.start(process.argv.slice(2));
