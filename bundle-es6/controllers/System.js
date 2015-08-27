import solfege from "solfegejs";

/**
 * The access points of the system
 */
export default class System
{
    /**
     * The main configuration
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *configuration(request, response)
    {
        let content = yield solfege.util.Node.fs.readFile("/recalbox/share/system/recalbox.conf");

        response.setHeader('Content-Type', 'text/plain');
        response.statusCode = 200;
        response.body = content;
    }
}

