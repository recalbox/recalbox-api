import solfege from "solfegejs";

/**
 * The home controller
 */
export default class Home
{
    /**
     * The homepage
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *index(request, response)
    {
        response.body = "Recalbox API";

    }
}

