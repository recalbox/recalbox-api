import solfege from "solfegejs";
import IniFile from "./IniFile";
import config from "../../config/config";
import defaultValues from "../../config/recalboxDefaultValues.json";
import Pagination from "./Pagination";
import FileInfo from "./FileInfo";

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
 * @param   {string}                            fallback    The fallback parameter name
 */
export function* getMainConfigurationParameterValue(name:string, request, response, fallback:string = null)
{
    let iniFile = new IniFile(config.api.mainConfigurationFilePath);
    iniFile.setDefaultValues(defaultValues);
    let value = yield iniFile.getParameterValue(name);

    let settings = {};
    if (fallback) {
        let defaultValue = yield iniFile.getParameterValue(fallback);
        settings[name] = defaultValue;
    }
    if (value) {
        settings[name] = value;
    }

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

    // Check if the directory exists
    let exists = yield solfege.util.Node.fs.exists(path);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: `Directory not found: ${path}`
        };
        return;
    }


    // Get the files
    let files = yield solfege.util.Node.fs.readdir(path);
    let total = files.length;

    // Pagination
    let pagination = new Pagination(files, max, request);
    let list = pagination.getList();
    let offset = pagination.offset;
    let limit = pagination.limit;

    // Get file informations
    let listWithMetadata = [];
    for (let fileName of list) {
        let fileInfo = new FileInfo(`${path}/${fileName}`);
        let metadata = yield fileInfo.getMetadata();
        listWithMetadata.push(metadata);
    }


    let statusCode = 200;
    if (listWithMetadata.length < total) {
        // Partial content
        statusCode = 206;
    }
    response.statusCode = statusCode;
    response.setHeader("Content-Range", `${offset}-${limit}/${total}`);
    response.setHeader("Accept-Range", `${itemName} ${max}`);
    response.parameters = listWithMetadata;
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
    // Check if the directory exists
    let exists = yield solfege.util.Node.fs.exists(directoryPath);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: `Directory not found: ${directoryPath}`
        };
        return;
    }

    // Get the uploaded file
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

/**
 * Get file metadata
 *
 * @public
 * @param   {string}                            filePath    The file path
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */
export function* getFileMetadata(filePath:string, request, response)
{
    // Check if the file exists
    let exists = yield solfege.util.Node.fs.exists(filePath);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: `File not found: ${filePath}`
        };
        return;
    }


    // Get file metadata
    try {
        let fileInfo = new FileInfo(filePath);
        let metadata = yield fileInfo.getMetadata();

        response.statusCode = 200;
        response.parameters = metadata;
    } catch (error) {
        response.statusCode = 500;
        response.parameters = {
            error: error.message
        };
    }
}


/**
 * Delete a file
 *
 * @public
 * @param   {string}                            filePath    The file path
 * @param   {solfege.bundle.server.Request}     request     The request
 * @param   {solfege.bundle.server.Response}    response    The response
 */
export function* deleteFile(filePath:string, request, response)
{
    // Check if the file exists
    let exists = yield solfege.util.Node.fs.exists(filePath);
    if (!exists) {
        response.statusCode = 404;
        response.parameters = {
            error: `File not found: ${filePath}`
        };
        return;
    }

    // Delete the file
    try {
        yield solfege.util.Node.fs.unlink(filePath);

        response.statusCode = 204;
    } catch (error) {
        response.statusCode = 500;
        response.parameters = {
            error: error.message
        };
    }
}



