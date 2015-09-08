import solfege from "solfegejs";
import IniFile from "../utils/IniFile";
import config from "../../config/config";
import defaultValues from "../../config/recalboxDefaultValues.json";


/**
 * The access points of the configuration
 */
export default class Configuration
{
    /**
     * Get the main configuration file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getConfiguration(request, response)
    {
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        iniFile.setDefaultValues(defaultValues);

        let content = yield iniFile.getContent();
        let parameters = yield iniFile.getParameters();

        response.statusCode = 200;
        response.body = content;
        response.parameters = parameters;
    }

    /**
     * Set the main configuration file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setConfiguration(request, response)
    {
        // Get the raw body from the request
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        let body = yield request.getRawBody();

        // Update the file
        let newContent = body.toString();
        yield iniFile.setContent(newContent);

        // Display the new content
        yield this.getConfiguration(request, response);
    }
}

