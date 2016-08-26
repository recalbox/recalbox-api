"use strict"

let solfege = require("solfegejs");
let ServerBundle = require("solfegejs-server");
let RecalboxApiBundle = require("./lib/Bundle");

let application = solfege.factory();
application.addBundle(new ServerBundle);
application.addBundle(new RecalboxApiBundle);

let parameters = process.argv;
parameters.shift();
parameters.shift();
application.start(parameters);
