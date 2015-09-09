import solfege from "solfegejs";
import IniFile from "./IniFile";
import config from "../../config/config";
import defaultValues from "../../config/recalboxDefaultValues.json";
import Pagination from "./Pagination";

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

/**
 * List files in a directory
 *
 * @public
 * @param   {string}                            path        The directory path
 * @param   {string}                            itemName    The item name found in the directory
 * @param   {object}                            options     The options
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */
export function* listDirectory(path:string, itemName:string, options:object, request, response)
{
    let max = 50;

    // Get the files
    let files = yield solfege.util.Node.fs.readdir(path);
    let total = files.length;

    // Pagination
    let pagination = new Pagination(files, max, request);
    let list = pagination.getList();
    let offset = pagination.offset;
    let limit = pagination.limit;


    let statusCode = 200;
    if (list.length < total) {
        // Partial content
        statusCode = 206;
    }
    response.statusCode = statusCode;
    response.setHeader("Content-Range", `${offset}-${limit}/${total}`);
    response.setHeader("Accept-Range", `${itemName} ${max}`);
    response.parameters = list;
}

/**
 * Upload a file
 *
 * @public
 * @param   {string}                            directoryPath   The directory path
 * @param   {solfege.bundle.server.Request}     request         The request
 * @param   {solfege.bundle.server.Response}    response        The response
 */
export function* uploadFile(directoryPath:string, request, response)
{
    let files = yield request.getFiles();
    let createdFiles = [];
    for (let field in files) {
        let file = files[field];
        let size = file.size;
        let name = file.name;
        let path = file.path;

        // Move the file to the directory
        let newPath = directoryPath + "/" + name;
        yield solfege.util.Node.fs.rename(path, newPath);
        createdFiles.push(name);
    }

    response.statusCode = 201;
    response.parameters = createdFiles;
}



