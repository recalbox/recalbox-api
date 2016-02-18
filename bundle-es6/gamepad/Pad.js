import solfege from "solfegejs";

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
    }

    /**
     * Connect the gamepad
     */
    *connect()
    {
        let uinput = yield solfege.util.Node.fs.open("/dev/uinput", "w+");

        yield solfege.util.Node.fs.close(uinput);
    }
}
