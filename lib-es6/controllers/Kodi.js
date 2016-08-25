import solfege from "solfegejs";
import * as ControllerUtil from "../utils/ControllerUtil";

/**
 * The access points of the Kodi configuration
 */
export default class Kodi
{
    /**
     * Get the Kodi settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getKodi(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");

        yield ControllerUtil.getMainConfigurationParameters(/^kodi\./, request, response);
    }

    /**
     * Get the Kodi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getKodiEnabled(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

        yield ControllerUtil.getMainConfigurationParameterValue("kodi.enabled", request, response);
    }

    /**
     * Set the Kodi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setKodiEnabled(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

        yield ControllerUtil.setMainConfigurationParameterValue("kodi.enabled", request, response);

        // Display the new value
        yield this.getKodiEnabled(request, response);
    }

    /**
     * Get the Kodi "atstartup" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getKodiAtstartup(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

        yield ControllerUtil.getMainConfigurationParameterValue("kodi.atstartup", request, response);
    }

    /**
     * Set the Kodi "atstartup" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setKodiAtstartup(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

        yield ControllerUtil.setMainConfigurationParameterValue("kodi.atstartup", request, response);

        // Display the new value
        yield this.getKodiAtstartup(request, response);
    }

    /**
     * Get the Kodi "xbutton" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getKodiXbutton(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

        yield ControllerUtil.getMainConfigurationParameterValue("kodi.xbutton", request, response);
    }

    /**
     * Set the Kodi "xbutton" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setKodiXbutton(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, OPTIONS");

        yield ControllerUtil.setMainConfigurationParameterValue("kodi.xbutton", request, response);

        // Display the new value
        yield this.getKodiXbutton(request, response);
    }

}

