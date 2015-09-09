import solfege from "solfegejs";
import * as ControllerUtil from "../utils/ControllerUtil";

/**
 * The access points of the Wifi configuration
 */
export default class Wifi
{
    /**
     * Get the Wifi settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getWifi(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameters(/^wifi\./, request, response);
    }

    /**
     * Get the Wifi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getWifiEnabled(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("wifi.enabled", request, response);
    }

    /**
     * Set the Wifi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setWifiEnabled(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("wifi.enabled", request, response);

        // Display the new value
        yield this.getWifiEnabled(request, response);
    }

    /**
     * Get the Wifi "ssid" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getWifiSsid(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("wifi.ssid", request, response);
    }

    /**
     * Set the Wifi "ssid" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setWifiSsid(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("wifi.ssid", request, response);

        // Display the new value
        yield this.getWifiSsid(request, response);
    }

    /**
     * Get the Wifi "key" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getWifiKey(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("wifi.key", request, response);
    }

    /**
     * Set the Wifi "key" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setWifiKey(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("wifi.key", request, response);

        // Display the new value
        yield this.getWifiKey(request, response);
    }

}

