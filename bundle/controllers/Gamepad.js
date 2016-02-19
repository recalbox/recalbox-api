"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _PadSnes = require("../gamepad/PadSnes");

var _PadSnes2 = _interopRequireDefault(_PadSnes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The access points of the virtual gamepads
 */
class Gamepad {
    /**
     * Constructor
     */
    constructor() {
        this.pads = new Map();
    }

    /**
     * Connect a new virtual gamepad
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *connect(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "POST, HEAD, OPTIONS");

        // Get the gamepad type
        let padType = yield request.getRawBody();
        padType = padType.toString();

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
            };
            return;
        }

        // Create the new gamepad
        // @todo Create a factory
        let pad;
        switch (padType) {
            default:
            case "snes":
                pad = new _PadSnes2.default(index);
                break;
        }

        yield pad.connect();
        this.pads.set(index, pad);
        response.status = 200;
        response.parameters = {
            message: `GamePad ${ index } connected`,
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
    *disconnect(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "DELETE, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        this.pads.delete(padIndex);
        yield pad.disconnect();

        response.status = 200;
        response.parameters = {
            message: `GamePad ${ padIndex } disconnected`
        };
    }

    /**
     * Set the state of A button
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setButtonA(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonB(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonX(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonY(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonL(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonR(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonSelect(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
    *setButtonStart(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
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
     * Set the state of the direction "none"
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setDirectionNone(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        yield pad.directionNone();

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of the direction "left"
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setDirectionLeft(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.directionHorizontalLeft();
                break;
            case "released":
                yield pad.directionHorizontalNone();
                break;
            case "pressedAndReleased":
                yield pad.directionHorizontalLeft();
                yield pad.directionHorizontalNone();
                break;
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of the direction "right"
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setDirectionRight(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.directionHorizontalRight();
                break;
            case "released":
                yield pad.directionHorizontalNone();
                break;
            case "pressedAndReleased":
                yield pad.directionHorizontalRight();
                yield pad.directionHorizontalNone();
                break;
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of the direction "up"
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setDirectionUp(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.directionVerticalUp();
                break;
            case "released":
                yield pad.directionVerticalNone();
                break;
            case "pressedAndReleased":
                yield pad.directionVerticalUp();
                yield pad.directionVerticalNone();
                break;
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

    /**
     * Set the state of the direction "down"
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setDirectionDown(request, response) {
        response.setHeader("Access-Control-Allow-Methods", "PUT, HEAD, OPTIONS");

        let padIndex = request.getParameter("index");
        padIndex = parseInt(padIndex);

        if (!this.pads.has(padIndex)) {
            response.status = 404;
            response.parameters = {
                error: `Gamepad ${ padIndex } not found`
            };
            return;
        }

        let pad = this.pads.get(padIndex);
        let value = yield request.getRawBody();
        value = value.toString();

        switch (value) {
            case "pressed":
                yield pad.directionVerticalDown();
                break;
            case "released":
                yield pad.directionVerticalNone();
                break;
            case "pressedAndReleased":
                yield pad.directionVerticalDown();
                yield pad.directionVerticalNone();
                break;
        }

        response.status = 200;
        response.parameters = {
            success: true
        };
    }

}
exports.default = Gamepad;
module.exports = exports['default'];