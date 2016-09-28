"use strict"

let solfege = require("solfegejs");
let ServerBundle = require("solfegejs-server");
let RouterBundle = require("solfegejs-server-router");
let ForeverBundle = require("solfegejs-forever");
let RecalboxApiBundle = require("./lib/Bundle");

let application = solfege.factory();
application.addBundle(new ServerBundle);
application.addBundle(new RouterBundle);
application.addBundle(new ForeverBundle);
application.addBundle(new RecalboxApiBundle);

application.loadConfiguration(`${__dirname}/config/production.yml`);

application.start(process.argv.slice(2));
