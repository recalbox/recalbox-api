import solfege from "solfegejs";
import IniFile from "../utils/IniFile";
import config from "../../config/config";
import defaultValues from "../../config/recalboxDefaultValues.json";

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
        iniFile.setDefaultValues(defaultValues);
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
        iniFile.setDefaultValues(defaultValues);
        let settings = {
            "kodi.enabled": yield iniFile.getParameterValue("kodi.enabled")
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
        // Get the raw body from the request
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        let body = yield request.getRawBody();

        // Normalize the new value
        let newValue = body.toString();
        if (!isNaN(newValue)) {
            body = new Number(body);
        }

        // Update the parameter
        yield iniFile.setParameterValue("kodi.enabled", newValue);

        // Display the new value
        yield this.getKodiEnabled(request, response);
    }
}

