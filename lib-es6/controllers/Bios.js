import solfege from "solfegejs";
import fs from "fs";
import config from "../../config/config";
import * as ControllerUtil from "../utils/ControllerUtil";

/**
 * The access points of the BIOS
 */
export default class Bios
{
    /**
     * List the bios
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *listBios(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");

        yield ControllerUtil.listDirectory(
            config.api.biosDirectoryPath,
            "bios",
            null,
            request,
            response
        );
    }


    /**
     * Add a bios
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *addBios(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");

        yield ControllerUtil.uploadFile(
            config.api.biosDirectoryPath,
            request,
            response
        );
    }

    /**
     * Get a file informations
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *getBiosFile(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");

        let fileName = request.getParameter("fileName");
        yield ControllerUtil.getFileMetadata(
            config.api.biosDirectoryPath+"/"+fileName,
            request,
            response
        );
    }

    /**
     * Download a file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *downloadBiosFile(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, DELETE, OPTIONS");

        let fileName = request.getParameter("fileName");
        let filePath = config.api.biosDirectoryPath+"/"+fileName;
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
     * Delete a file
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *deleteBiosFile(request, response)
    {
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, DELETE, OPTIONS");

        let fileName = request.getParameter("fileName");
        yield ControllerUtil.deleteFile(
            config.api.biosDirectoryPath+"/"+fileName,
            request,
            response
        );
    }
}

