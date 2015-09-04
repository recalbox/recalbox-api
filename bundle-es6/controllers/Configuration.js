import solfege from "solfegejs";
import IniFile from "../utils/IniFile";
import config from "../../config/default";


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
        let content = yield iniFile.getContent();
        let parameters = yield iniFile.getParameters();

        response.statusCode = 200;
        response.body = content;
        response.parameters = parameters;
    }
}

