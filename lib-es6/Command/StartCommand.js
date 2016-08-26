import ContainerAwareCommand from "solfegejs/lib/bundles/Console/Command/ContainerAwareCommand";

/**
 * Start command
 */
export default class StartCommand extends ContainerAwareCommand
{
    /**
     * Configure command
     */
    *configure()
    {
        this.setName("recalbox-api:start");
        this.setDescription("Start Recalbox API");
    }

    /**
     * Execute the command
     */
    *execute()
    {
        let container = this.getContainer();
        let serverFactory = yield container.get("http_server_factory");

        let server = serverFactory.create("recalbox-api");
        server.start(1337);

        console.info("API started");
    }
}
