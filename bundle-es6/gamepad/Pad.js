import solfege from "solfegejs";
import ioctl from "ioctl";
import Struct from "struct";
import uinput from "./lib/uinput";

/**
 * A virtual gamepad
 */
export default class Pad
{
    /**
     * Constructor
     */
    constructor()
    {
        this.uinputFile;
    }

    /**
     * Connect the gamepad
     */
    *connect()
    {
        this.uinputFile = yield solfege.util.Node.fs.open("/dev/uinput", "w+");

        // Initialize buttons
        ioctl(this.uinputFile, uinput.UI_SET_EVBIT, uinput.EV_KEY);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_A);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_B);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_X);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_Y);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_TL);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_TR);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_START);
        ioctl(this.uinputFile, uinput.UI_SET_KEYBIT, uinput.BTN_SELECT);

        // Initialize directions
        ioctl(this.uinputFile, uinput.UI_SET_EVBIT, uinput.EV_ABS);
        ioctl(this.uinputFile, uinput.UI_SET_ABSBIT, uinput.ABS_X);
        ioctl(this.uinputFile, uinput.UI_SET_ABSBIT, uinput.ABS_Y);

        let input_id = Struct()
            .word16Sle('bustype')
            .word16Sle('vendor')
            .word16Sle('product')
            .word16Sle('version');

        let uinput_user_dev = Struct()
            .chars('name', uinput.UINPUT_MAX_NAME_SIZE)
            .struct('id', input_id)
            .word32Sle('ff_effects_max')
            .array('absmax', uinput.ABS_CNT, 'word32Sle')
            .array('absmin', uinput.ABS_CNT, 'word32Sle')
            .array('absfuzz', uinput.ABS_CNT, 'word32Sle')
            .array('absflat', uinput.ABS_CNT, 'word32Sle');

        uinput_user_dev.allocate();
        let buffer = uinput_user_dev.buffer();

        let uidev = uinput_user_dev.fields;

        uidev.name = "Virtual gamepad"
        uidev.id.bustype = uinput.BUS_USB
        uidev.id.vendor = 0x3
        uidev.id.product = 0x3
        uidev.id.version = 2

        uidev.absmax[uinput.ABS_X] = 255
        uidev.absmin[uinput.ABS_X] = 0
        uidev.absfuzz[uinput.ABS_X] = 0
        uidev.absflat[uinput.ABS_X] = 15

        uidev.absmax[uinput.ABS_Y] = 255
        uidev.absmin[uinput.ABS_Y] = 0
        uidev.absfuzz[uinput.ABS_Y] = 0
        uidev.absflat[uinput.ABS_Y] = 15

        yield solfege.util.Node.fs.write(this.uinputFile, buffer, 0, buffer.length, null);
        try {
            ioctl(this.uinputFile, uinput.UI_DEV_CREATE);
        } catch (error) {
            console.log(error);
            yield solfege.util.Node.fs.close(this.uinputFile);
            this.uinputFile = undefined;
        }
    }

    /**
     * Disconnect the gamepad
     */
    *disconnect()
    {
        if (this.uinputFile) {
            ioctl(this.uinputFile, uinput.UI_DEV_DESTROY);
            yield solfege.util.Node.fs.close(this.uinputFile);
            this.uinputFile = undefined;
        }
    }

    /**
     * Press the A button
     */
    *pressButtonA()
    {
    }

    /**
     * Release the A button
     */
    *releaseButtonA()
    {
    }
}
