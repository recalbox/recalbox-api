"use strict"

let solfege = require("solfegejs");
let ServerBundle = require("solfegejs-server");
let RouterBundle = require("solfegejs-server-router");
let RecalboxApiBundle = require("./lib/Bundle");

// Initialize application
let application = solfege.factory();
application.addBundle(new ServerBundle);
application.addBundle(new RouterBundle);
application.addBundle(new RecalboxApiBundle);

// Load configuration
application.loadConfiguration(`${__dirname}/config/production.yml`);

// Start the server
application.start(["recalbox-api:start"]);
