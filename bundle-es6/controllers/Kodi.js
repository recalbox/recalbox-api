import solfege from "solfegejs";
import IniFile from "../utils/IniFile";
import config from "../../config/default";

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
        // Extract the settings from the main configuration
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        let parameters = yield iniFile.getParameters(/^kodi\./);

        response.statusCode = 200;
        response.parameters = parameters;
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
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        let settings = {
            "kodi.enabled": yield iniFile.getParameterValue("kodi.enabled", 1)
        };

        response.statusCode = 200;
        response.parameters = settings;
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
        // @todo
        response.statusCode = 200;
        response.body = "done";
    }
}

