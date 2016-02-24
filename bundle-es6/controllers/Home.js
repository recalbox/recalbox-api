import solfege from "solfegejs";
import joysticks from "../../build/Release/sdl-joystick.node";

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
        let count = joysticks.getJoystickCount();

        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
        response.setHeader('Content-Type', 'text/plain');
        response.statusCode = 200;
        response.body = "Recalbox API " + count;
        response.parameters = ["Recalbox API"];
    }
}

