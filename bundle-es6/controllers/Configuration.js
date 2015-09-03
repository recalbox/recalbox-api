import solfege from "solfegejs";
import ini from "ini";

/**
 * The access points of the configuration
 */
export default class Configuration
{
    /**
     * The main configuration file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *index(request, response)
    {
        // Get the content of the main configuration
        let content = yield this.getMainConfigurationContent();

        // Parse the content and extract the parameters
        let parameters = ini.parse(content);

        // Write the response
        response.statusCode = 200;
        response.body = content;
        response.parameters = parameters;
    }

    /**
     * The Kodi settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *kodi(request, response)
    {
        let settings = {};

        // Extract the settings from the main configuration
        let parameters = yield this.getMainConfigurationParameters();
        let regexp = /^kodi\./;
        for (let key in parameters) {
            if (key.match(regexp)) {
                settings[key] = parameters[key];
            }
        }

        response.statusCode = 200;
        response.parameters = settings;
    }

    /**
     * The Kodi "enabled" setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *kodiEnabled(request, response)
    {
        let settings = {
            "kodi.enabled": yield this.getMainConfigurationSetting("kodi.enabled")
        };

        response.statusCode = 200;
        response.parameters = settings;
    }

    /**
     * Get the main configuration content
     *
     * @private
     * @return  {string}    The content
     */
    *getMainConfigurationContent()
    {
        // Get the content of the main configuration
        let content = yield solfege.util.Node.fs.readFile("/recalbox/share/system/recalbox.conf");
        content = content.toString("utf8");

        return content;
    }

    /**
     * Get the main configuration parameters
     *
     * @private
     * @return  {object}    The parameters
     */
    *getMainConfigurationParameters()
    {
        let content = yield this.getMainConfigurationContent();
        let parameters = ini.parse(content);

        return parameters;
    }

    /**
     * Get a setting value from the main configuration
     *
     * @param   {string}        name            The setting name
     * @param   {string|number} defaultValue    The default value
     */
    *getMainConfigurationSetting(name, defaultValue)
    {
        // Extract the value from the main configuration
        let parameters = yield this.getMainConfigurationParameters();
        if (parameters.hasOwnProperty(name)) {
            return parameters[name];
        }

        return defaultValue;
    }
}

