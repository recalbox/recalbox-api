var expect = require('chai').expect;
var should = require('chai').should();
var request = require('supertest');
var pm2 = require('pm2');
var baseUrl = "http://127.0.0.1:1337";

/**
 * Test the REST API
 */
describe('REST API', function()
{
    // Increase the timeout to 10s
    this.timeout(10000);

    /**
     * It runs before all tests
     */
    before(function(done)
    {
        pm2.connect(function() {
            pm2.start({
                name               : "recalbox-api-test",
                exec_interpreter   : "node",
                exec_mode          : "cluster",
                instances          : 1,
                max_memory_restart : "100M",
                node_args          : ["--harmony", "--harmony-proxies"],
                cwd                : "bundle",
                script             : "console.js",
                args               : ["server:start"]
            }, function(error, apps) {
                pm2.disconnect();
                setTimeout(done, 5000);
            });
        });
    });

    /**
     * It runs after all tests
     */
    after(function(done)
    {
        pm2.connect(function() {
            pm2.stop("recalbox-api-test", function(error, proc) {
                pm2.disconnect();
                process.nextTick(done);
            });
        });
    });

    /**
     * Test the URL /
     */
    describe("/", function()
    {
        it("should return the API homepage", function(done)
        {
            request(baseUrl)
                .get("/")
                .set("Accept", "text/plain")
                .end(function(error, response) {
                    if (error) {
                        done(error);
                        return;
                    }

                    response.text.should.equal("Recalbox API");
                    done();
                });
        });
    });

});
