import solfege from "solfegejs";
import PadSnes from "../gamepad/PadSnes";

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

        // Get the gamepad type
        let padType = yield request.getRawBody();
        padType = value.toString();


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

        // Create the new gamepad
        // @todo Create a factory
        let pad;
        switch (padType) {
            default:
            case "snes":
                pad = new PadSnes(index);
                break;
        }

        yield pad.connect();
        this.pads.set(index, pad);
        response.status = 200;
        response.parameters = {
            message: `GamePad ${index} connected`,
            index: index
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
        this.pads.delete(padIndex);
        yield pad.disconnect();

        response.status = 200;
        response.parameters = {
            message: `GamePad ${padIndex} disconnected`
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonA();
                break;
            case "released":
                yield pad.releaseButtonA();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonA();
                yield pad.releaseButtonA();
        }

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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonB();
                break;
            case "released":
                yield pad.releaseButtonB();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonB();
                yield pad.releaseButtonB();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of X button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonX(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonX();
                break;
            case "released":
                yield pad.releaseButtonX();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonX();
                yield pad.releaseButtonX();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of Y button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonY(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonY();
                break;
            case "released":
                yield pad.releaseButtonY();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonY();
                yield pad.releaseButtonY();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of L button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonL(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonL();
                break;
            case "released":
                yield pad.releaseButtonL();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonL();
                yield pad.releaseButtonL();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of R button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonR(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonR();
                break;
            case "released":
                yield pad.releaseButtonR();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonR();
                yield pad.releaseButtonR();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of SELECT button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonSelect(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonSelect();
                break;
            case "released":
                yield pad.releaseButtonSelect();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonSelect();
                yield pad.releaseButtonSelect();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }


    /**
     * Set the state of START button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonStart(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.pressButtonStart();
                break;
            case "released":
                yield pad.releaseButtonStart();
                break;
            default:
            case "pressedAndReleased":
                yield pad.pressButtonStart();
                yield pad.releaseButtonStart();
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of the direction
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setDirection(request, response)
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
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            default:
            case "none":
                yield pad.directionNone();
                break;
            case "up":
                yield pad.directionUp();
                break;
            case "upAndRelease":
                yield pad.directionUp();
                yield pad.directionNone();
                break;
            case "down":
                yield pad.directionDown();
                break;
            case "downAndRelease":
                yield pad.directionDown();
                yield pad.directionNone();
                break;
            case "left":
                yield pad.directionLeft();
                break;
            case "leftAndRelease":
                yield pad.directionLeft();
                yield pad.directionNone();
                break;
            case "right":
                yield pad.directionRight();
                break;
            case "rightAndRelease":
                yield pad.directionRight();
                yield pad.directionNone();
                break;
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

}
