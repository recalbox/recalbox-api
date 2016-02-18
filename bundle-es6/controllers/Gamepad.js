import solfege from "solfegejs";


/**
 * The access points of the virtual gamepads
 */
export default class Gamepad
{
    /**
     * Connect a new virtual gamepad
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *connect(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "POST, HEAD, OPTIONS");
    }

    /**
     * Disconnect a virtual gamepad
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *disconnect(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "DELETE, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
    }

    /**
     * Set the state of A button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonA(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        response.statusCode = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of B button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonB(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        response.statusCode = 200;
        response.parameters = {
            success: true
        };
    }
}

