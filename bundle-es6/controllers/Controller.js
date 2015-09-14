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

    /**
     * Get the XBOXDRV settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getControllerXboxdrv(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameters(/^controllers\.xboxdrv\./, request, response);
    }

    /**
     * Indicates if the XBOXDRV is enabled
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getControllerXboxdrvEnabled(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("controllers.xboxdrv.enabled", request, response);
    }

    /**
     * Enable/disable XBOXDRV
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setControllerXboxdrvEnabled(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("controllers.xboxdrv.enabled", request, response);

        // Display the new value
        yield this.getControllerXboxdrvEnabled(request, response);
    }

    /**
     * Get the amount of controllers to use with XBOXDRV
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getControllerXboxdrvNbControls(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("controllers.xboxdrv.nbcontrols", request, response);
    }

    /**
     * Set the amount of controllers to use with xboxdrv (0..4)
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setControllerXboxdrvNbControls(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("controllers.xboxdrv.nbcontrols", request, response);

        // Display the new value
        yield this.getControllerXboxdrvNbControls(request, response);
    }


}

