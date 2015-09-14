import solfege from "solfegejs";
import * as ControllerUtil from "../utils/ControllerUtil";

/**
 * The access points of the controllers configuration
 */
export default class Controller
{
    /**
     * Get the PS3 controllers settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getControllerPs3(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameters(/^controllers\.ps3\./, request, response);
    }

    /**
     * Indicates if the PS3 controllers are enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getControllerPs3Enabled(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("controllers.ps3.enabled", request, response);
    }

    /**
     * Enable/disable PS3 controllers
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setControllerPs3Enabled(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("controllers.ps3.enabled", request, response);

        // Display the new value
        yield this.getControllerPs3Enabled(request, response);
    }

    /**
     * Get driver used for the PS3 controllers
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getControllerPs3Driver(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("controllers.ps3.driver", request, response);
    }

    /**
     * Set the driver for PS3 controllers
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setControllerPs3Driver(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("controllers.ps3.driver", request, response);

        // Display the new value
        yield this.getControllerPs3Driver(request, response);
    }

}

