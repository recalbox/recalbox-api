import solfege from "solfegejs";
import controllersPackage from "./controllers"

/**
 * The API bundle
 *
 * @class   Api
 */
export default class Api
{
    /**
     * Constructor
     */
    constructor()
    {
        // The controllers package
        this.controllers = controllersPackage;
    }

    /**
     * Format the response
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     * @param   {GeneratorFunction}                 next        The next function
     */
    *formatMiddleware(request, response, next)
    {
        // Execute the next middleware
        yield *next;

        // Allow cross domain access
        response.setHeader("Access-Control-Allow-Origin", "*");

        // Convert the body to the requested format
        let format = request.getHeader("Content-Type");
        switch (format) {
            // Plain text
            default:
            case "text":
            case "text/plain":
                response.setHeader("Content-Type", "text/plain");

                // If the body is empty, then use the parameters
                if (!response.body && response.parameters) {
                    let body = "";
                    for (let key in response.parameters) {
                        body += `${key}=${response.parameters[key]}\n`;
                    }
                    response.body = body;
                }
                break;

            // XML key values
            case "xml":
            case "text/xml":
            case "application/xml":
                response.setHeader("Content-Type", "application/xml");

                let body = `<?xml version="1.0" encoding="UTF-8" ?>\n<response>\n`;
                for (let key in response.parameters) {
                    let value = response.parameters[key];
                    body += `<${key}>`;
                    if (!isNaN(value)) {
                        body += value;
                    } else {
                        body += `<![CDATA[${value}]]>`;
                    }
                    body += `</${key}>\n`;
                }
                body += `</response>`;
                response.body = body;
                break;

            // JSON key values
            case "json":
            case "text/json":
            case "application/json":
                response.setHeader("Content-Type", "application/json");
                response.body = JSON.stringify(response.parameters, null, "    ");
                break;
        }

    }
}
