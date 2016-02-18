"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _ioctl = require("ioctl");

var _ioctl2 = _interopRequireDefault(_ioctl);

var _struct = require("struct");

var _struct2 = _interopRequireDefault(_struct);

var _uinput = require("./lib/uinput");

var _uinput2 = _interopRequireDefault(_uinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A virtual gamepad
 */
class Pad {
    /**
     * Constructor
     */
    constructor() {
        this.uinputFile;
    }

    /**
     * Connect the gamepad
     */
    *connect() {
        this.uinputFile = yield _solfegejs2.default.util.Node.fs.open("/dev/uinput", "w+");

        // Initialize buttons
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_EVBIT, _uinput2.default.EV_KEY);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_A);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_B);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_X);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_Y);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_TL);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_TR);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_START);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_KEYBIT, _uinput2.default.BTN_SELECT);

        // Initialize directions
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_EVBIT, _uinput2.default.EV_ABS);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_ABSBIT, _uinput2.default.ABS_X);
        (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_SET_ABSBIT, _uinput2.default.ABS_Y);

        let input_id = (0, _struct2.default)().word16Sle('bustype').word16Sle('vendor').word16Sle('product').word16Sle('version');

        let uinput_user_dev = (0, _struct2.default)().chars('name', _uinput2.default.UINPUT_MAX_NAME_SIZE).struct('id', input_id).word32Sle('ff_effects_max').array('absmax', _uinput2.default.ABS_CNT, 'word32Sle').array('absmin', _uinput2.default.ABS_CNT, 'word32Sle').array('absfuzz', _uinput2.default.ABS_CNT, 'word32Sle').array('absflat', _uinput2.default.ABS_CNT, 'word32Sle');

        uinput_user_dev.allocate();
        let buffer = uinput_user_dev.buffer();

        let uidev = uinput_user_dev.fields;

        uidev.name = "Virtual gamepad";
        uidev.id.bustype = _uinput2.default.BUS_USB;
        uidev.id.vendor = 0x3;
        uidev.id.product = 0x3;
        uidev.id.version = 2;

        uidev.absmax[_uinput2.default.ABS_X] = 255;
        uidev.absmin[_uinput2.default.ABS_X] = 0;
        uidev.absfuzz[_uinput2.default.ABS_X] = 0;
        uidev.absflat[_uinput2.default.ABS_X] = 15;

        uidev.absmax[_uinput2.default.ABS_Y] = 255;
        uidev.absmin[_uinput2.default.ABS_Y] = 0;
        uidev.absfuzz[_uinput2.default.ABS_Y] = 0;
        uidev.absflat[_uinput2.default.ABS_Y] = 15;

        try {
            yield _solfegejs2.default.util.Node.fs.write(this.uinputFile, buffer, 0, buffer.length, null);
            (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_DEV_CREATE);
        } catch (error) {
            console.error("API Gamepad sendEvent error: " + error);

            yield _solfegejs2.default.util.Node.fs.close(this.uinputFile);
            this.uinputFile = undefined;
        }
    }

    /**
     * Disconnect the gamepad
     */
    *disconnect() {
        if (this.uinputFile) {
            (0, _ioctl2.default)(this.uinputFile, _uinput2.default.UI_DEV_DESTROY);
            yield _solfegejs2.default.util.Node.fs.close(this.uinputFile);
            this.uinputFile = undefined;
        }
    }

    /**
     * Press the A button
     */
    *pressButtonA() {
        yield this.sendEvent({ type: 0x03, code: 0x00, value: 0 });
        yield this.sendEvent({ type: 0x03, code: 0x01, value: 127 });

        yield this.sendEvent({ type: 0x03, code: 0x00, value: 127 });
        yield this.sendEvent({ type: 0x03, code: 0x01, value: 127 });
    }

    /**
     * Release the A button
     */
    *releaseButtonA() {}

    *sendEvent(event) {
        if (!this.uinputFile) {
            return;
        }

        let input_event = (0, _struct2.default)().struct('time', (0, _struct2.default)().word32Sle('tv_sec').word32Sle('tv_usec')).word16Ule('type').word16Ule('code').word32Sle('value');
        input_event.allocate();

        let ev_buffer = input_event.buffer();
        let ev = input_event.fields;

        ev.type = event.type;
        ev.code = event.code;
        ev.value = event.value;
        ev.time.tv_sec = Math.round(Date.now() / 1000);
        ev.time.tv_usec = Math.round(Date.now() % 1000 * 1000);

        let input_event_end = (0, _struct2.default)().struct('time', (0, _struct2.default)().word32Sle('tv_sec').word32Sle('tv_usec')).word16Ule('type').word16Ule('code').word32Sle('value');
        input_event_end.allocate();

        let ev_end_buffer = input_event_end.buffer();
        let ev_end = input_event_end.fields;

        ev_end.type = 0;
        ev_end.code = 0;
        ev_end.value = 0;
        ev_end.time.tv_sec = Math.round(Date.now() / 1000);
        ev_end.time.tv_usec = Math.round(Date.now() % 1000 * 1000);

        try {
            yield _solfegejs2.default.util.Node.fs.write(this.uinputFile, ev_buffer, 0, ev_buffer.length, null);
            yield _solfegejs2.default.util.Node.fs.write(this.uinputFile, ev_end_buffer, 0, ev_end_buffer.length, null);
        } catch (error) {
            console.error("API Gamepad sendEvent error: " + error);
        }
    }
}
exports.default = Pad;
module.exports = exports['default'];