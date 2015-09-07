import solfege from "solfegejs";
import config from "../../config/config";
import Pagination from "../utils/Pagination";

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
        let max = 50;

        // Get the files
        let directoryPath = config.api.biosDirectoryPath;
        let files = yield solfege.util.Node.fs.readdir(directoryPath);
        let total = files.length;

        // Pagination
        let pagination = new Pagination(files, max, request);
        let list = pagination.getList();
        let offset = pagination.offset;
        let limit = pagination.limit;


        let statusCode = 200;
        if (list.length < total) {
            // Partial content
            statusCode = 206;
        }
        response.statusCode = statusCode;
        response.setHeader("Content-Range", `${offset}-${limit}/${total}`);
        response.setHeader("Accept-Range", `bios ${max}`);
        response.parameters = list;
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
        let directoryPath = config.api.biosDirectoryPath;
        let files = yield request.getFiles();
        let createdFiles = [];
        for (let field in files) {
            let file = files[field];
            let size = file.size;
            let name = file.name;
            let path = file.path;

            // Move the file to the directory
            let newPath = directoryPath + "/" + name;
            yield solfege.util.Node.fs.rename(path, newPath);
            createdFiles.push(name);
        }

        response.statusCode = 201;
        response.parameters = createdFiles;
    }
}

