"use strict"

let solfege = require("solfegejs");
let ServerBundle = require("solfegejs-server");
let RecalboxApiBundle = require("./lib/Bundle");

let application = solfege.factory();
application.addBundle(new ServerBundle);
application.addBundle(new RecalboxApiBundle);

application.start(["recalbox-api:start"]);
