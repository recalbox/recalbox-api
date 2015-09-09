import solfege from "solfegejs";
import IniFile from "./IniFile";
import config from "../../config/config";
import defaultValues from "../../config/recalboxDefaultValues.json";


/**
 * Helpers for the controllers
 */


/**
 * Get a parameter value from the main configuration
 *
 * @public
 * @param   {string}                            name        The parameter name
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */
export function* getMainConfigurationParameterValue(name:string, request, response)
{
    let iniFile = new IniFile(config.api.mainConfigurationFilePath);
    iniFile.setDefaultValues(defaultValues);
    let settings = {};
    settings[name] = yield iniFile.getParameterValue(name);

    response.statusCode = 200;
    response.parameters = settings;
}

/**
 * Get parameters from the main configuration
 *
 * @public
 * @param   {RegExp}                            pattern     The pattern of the parameter name
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */
export function* getMainConfigurationParameters(pattern:RegExp, request, response)
{
    // Extract the settings from the main configuration
    let iniFile = new IniFile(config.api.mainConfigurationFilePath);
    iniFile.setDefaultValues(defaultValues);
    let parameters = yield iniFile.getParameters(pattern);

    response.statusCode = 200;
    response.parameters = parameters;
}

/**
 * Set a parameter value of the main configuration
 *
 * @public
 * @param   {string}                            name        The parameter name
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */
export function* setMainConfigurationParameterValue(name:string, request, response)
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
    yield iniFile.setParameterValue(name, newValue);
}



