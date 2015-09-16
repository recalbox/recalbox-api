import solfege from "solfegejs";
import config from "../../config/config";
import * as ControllerUtil from "../utils/ControllerUtil";

/**
 * The access points of the game systems
 */
export default class GameSystem
{
    /**
     * Get the system list
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystems(request, response)
    {
        let list = [
            "atari2600",
            "atari7800",
            "fba",
            "fba_libretro",
            "fds",
            "gamegear",
            "gb",
            "gba",
            "gbc",
            "gw",
            "lutro",
            "lynx",
            "mame",
            "mastersystem",
            "megadrive",
            "msx",
            "n64",
            "neogeo",
            "nes",
            "ngp",
            "pcengine",
            "prboom",
            "psx",
            "scummvm",
            "sega32x",
            "segacd",
            "sg1000",
            "snes",
            "vectrex",
            "virtualboy",
            "wswan"
        ];

        response.statusCode = 200;
        response.parameters = list;
    }

    /**
     * Get the rom list of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getRoms(request, response)
    {
        let systemId = request.getParameter("id");
        let directoryPath = `${config.api.romsDirectoryPath}/${systemId}`;

        yield ControllerUtil.listDirectory(
            directoryPath,
            "rom",
            null,
            request,
            response
        );
    }

    /**
     * Add a ROM
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *addRom(request, response)
    {
        let systemId = request.getParameter("id");
        let directoryPath = `${config.api.romsDirectoryPath}/${systemId}`;

        yield ControllerUtil.uploadFile(
            directoryPath,
            request,
            response
        );
    }

    /**
     * Get a ROM informations
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getRom(request, response)
    {
        let systemId = request.getParameter("id");
        let fileName = request.getParameter("fileName");
        let directoryPath = `${config.api.romsDirectoryPath}/${systemId}`;

        yield ControllerUtil.getFileMetadata(
            directoryPath+"/"+fileName,
            request,
            response
        );
    }


    /**
     * Delete a ROM
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *deleteRom(request, response)
    {
        let systemId = request.getParameter("id");
        let fileName = request.getParameter("fileName");
        let directoryPath = `${config.api.romsDirectoryPath}/${systemId}`;

        yield ControllerUtil.deleteFile(
            directoryPath+"/"+fileName,
            request,
            response
        );
    }

}

