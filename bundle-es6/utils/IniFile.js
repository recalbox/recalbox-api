import solfege from "solfegejs";
import ini from "ini";

/**
 * An util class to manipulate INI file
 */
export default class IniFile
{
    /**
     * Constructor
     *
     * @param   {string}    filePath    The INI file path
     */
    constructor(filePath)
    {
        // Save the file path
        this.filePath = filePath;
    }

    /**
     * Get the file content
     *
     * @public
     * @return  {string}    The content
     */
    *getContent()
    {
        let content = yield solfege.util.Node.fs.readFile(this.filePath);
        content = content.toString("utf8");

        return content;
    }

    /**
     * Extract parameters from the file
     *
     * @public
     * @param   {RegExp}    regexp  The pattern of the parameter name
     * @return  {object}            The parameters
     */
    *getParameters(regexp = null)
    {
        let content = yield this.getContent();
        let parameters = ini.parse(content);

        // Filter the parameters if the regexp is provided
        if (regexp instanceof RegExp) {
            let filteredParameters = {};
            for (let key in parameters) {
                if (key.match(regexp)) {
                    filteredParameters[key] = parameters[key];
                }
            }
            return filteredParameters;
        }

        return parameters;
    }

    /**
     * Get a parameter value
     *
     * @param   {string}        name            The parameter name
     * @param   {string|number} defaultValue    The default value
     * @return  {string|number}                 The value
     */
    *getParameterValue(name, defaultValue)
    {
        // Extract the value from the main configuration
        let parameters = yield this.getParameters();
        if (parameters.hasOwnProperty(name)) {
            return parameters[name];
        }

        return defaultValue;
    }
}
