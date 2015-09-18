import solfege from "solfegejs";
import fs from "fs";
import config from "../../config/config";
import * as ControllerUtil from "../utils/ControllerUtil";
import IniFile from "../utils/IniFile";
import defaultValues from "../../config/recalboxDefaultValues.json";

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
     * Get the default system settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemsDefault(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameters(/^global\./, request, response);
    }

    /**
     * Get the default video mode
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemsDefaultVideoMode(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("global.videomode", request, response);
    }

    /**
     * Set the default video mode
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemsDefaultVideoMode(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("global.videomode", request, response);

        // Display the new value
        yield this.getSystemsDefaultVideoMode(request, response);
    }

    /**
     * Get the default shaders
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemsDefaultShaders(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("global.shaders", request, response);
    }

    /**
     * Set the default shaders
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemsDefaultShaders(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("global.shaders", request, response);

        // Display the new value
        yield this.getSystemsDefaultShaders(request, response);
    }

    /**
     * Get the default ratio
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemsDefaultRatio(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("global.ratio", request, response);
    }

    /**
     * Set the default ratio
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemsDefaultRatio(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("global.ratio", request, response);

        // Display the new value
        yield this.getSystemsDefaultRatio(request, response);
    }

    /**
     * Get the default smooth setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemsDefaultSmooth(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("global.smooth", request, response);
    }

    /**
     * Set the default smooth setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemsDefaultSmooth(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("global.smooth", request, response);

        // Display the new value
        yield this.getSystemsDefaultSmooth(request, response);
    }

    /**
     * Get the default rewind setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemsDefaultRewind(request, response)
    {
        yield ControllerUtil.getMainConfigurationParameterValue("global.rewind", request, response);
    }

    /**
     * Set the default rewind setting
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemsDefaultRewind(request, response)
    {
        yield ControllerUtil.setMainConfigurationParameterValue("global.rewind", request, response);

        // Display the new value
        yield this.getSystemsDefaultRewind(request, response);
    }


    /**
     * Get the system settings
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystem(request, response)
    {
        let systemId = request.getParameter("id");

        // Extract the settings from the main configuration
        let iniFile = new IniFile(config.api.mainConfigurationFilePath);
        iniFile.setDefaultValues(defaultValues);
        let globalParameters = yield iniFile.getParameters(/^global\./);
        let systemParameters = yield iniFile.getParameters(new RegExp("^"+systemId+"."));

        // Merge the values
        let parameters = {};
        for (let key in globalParameters) {
            let newKey = key.replace("global", systemId);
            parameters[newKey] = globalParameters[key];
        }
        for (let key in systemParameters) {
            if (systemParameters[key]) {
                parameters[key] = systemParameters[key];
            }
        }

        response.statusCode = 200;
        response.parameters = parameters;
    }

    /**
     * Get the video mode of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemVideoMode(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".videomode";
        let fallbackName = "global.videomode";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response,
            fallbackName
        );
    }

    /**
     * Set the video mode of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemVideoMode(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".videomode";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemVideoMode(request, response);
    }

    /**
     * Get the shaders of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemShaders(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".shaders";
        let fallbackName = "global.shaders";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response,
            fallbackName
        );
    }

    /**
     * Set the shaders of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemShaders(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".shaders";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemShaders(request, response);
    }

    /**
     * Get the ratio of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemRatio(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".ratio";
        let fallbackName = "global.ratio";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response,
            fallbackName
        );
    }

    /**
     * Set the ratio of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemRatio(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".ratio";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemRatio(request, response);
    }

    /**
     * Get the smooth setting of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemSmooth(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".smooth";
        let fallbackName = "global.smooth";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response,
            fallbackName
        );
    }

    /**
     * Set the smooth setting of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemSmooth(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".smooth";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemSmooth(request, response);
    }

    /**
     * Get the rewind setting of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemRewind(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".rewind";
        let fallbackName = "global.rewind";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response,
            fallbackName
        );
    }

    /**
     * Set the rewind setting of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemRewind(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".rewind";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemRewind(request, response);
    }

    /**
     * Get the emulator of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemEmulator(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".emulator";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response
        );
    }

    /**
     * Set the emulator of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemEmulator(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".emulator";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemEmulator(request, response);
    }

    /**
     * Get the core of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getSystemCore(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".core";

        yield ControllerUtil.getMainConfigurationParameterValue(
            parameterName,
            request,
            response
        );
    }

    /**
     * Set the core of the specified system
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *setSystemCore(request, response)
    {
        let systemId = request.getParameter("id");
        let parameterName = systemId+".core";

        yield ControllerUtil.setMainConfigurationParameterValue(parameterName, request, response);

        // Display the new value
        yield this.getSystemCore(request, response);
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
     * Download a ROM
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *downloadRom(request, response)
    {
        let systemId = request.getParameter("id");
        let fileName = request.getParameter("fileName");
        let filePath = `${config.api.romsDirectoryPath}/${systemId}/${fileName}`;
        let exists = yield solfege.util.Node.fs.exists(filePath);

        if (!exists) {
            response.statusCode = 404;
            return;
        }

        response.statusCode = 200;
        response.setHeader(
            "Content-disposition", 
            `attachment; filename=${fileName}`
        );
        let fileStream = fs.createReadStream(filePath);
        response.body = fileStream;
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

