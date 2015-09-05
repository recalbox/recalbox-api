import solfege from "solfegejs";
import config from "../../config/config";


/**
 * The access points of the BIOS
 */
export default class Bios
{
    /**
     * List the bios
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *listBios(request, response)
    {
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        let content = yield iniFile.getContent();
        let parameters = yield iniFile.getParameters();

        response.statusCode = 200;
        response.body = content;
        response.parameters = parameters;
    }
}

