import solfege from "solfegejs";
import Pad from "../gamepad/Pad";

/**
 * The access points of the virtual gamepads
 */
export default class Gamepad
{
    /**
     * Constructor
     */
    constructor()
    {
        this.pads = new Map;
    }

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

        // Create the new gamepad
        let pad = new Pad();

        // Find an index
        let index;
        let indexMax = 4;
        for (index = 1; index <= indexMax; index++) {
            if (!this.pads.has(index)) {
                break;
            }
        }
        if (index > indexMax) {
            response.status = 403;
            response.parameters = {
                error: "Too many gamepads"
            }
            return;
        }

        yield pad.connect();
        this.pads.set(index, pad);
        response.status = 200;
        response.parameters = {
            message: `Gamepad ${index} connected`
        };
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
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${padIndex} not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        yield pad.disconnect();

        response.status = 200;
        response.parameters = {
            message: `Gamepad ${padIndex} is disconnected`
        };
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

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${padIndex} not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        yield pad.pressButtonA();
        yield pad.releaseButtonA();

        response.status = 200;
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

