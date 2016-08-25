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
        console.info("API started");
    }
}
