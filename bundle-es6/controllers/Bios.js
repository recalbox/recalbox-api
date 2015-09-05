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
        // Get the files
        let directoryPath = config.api.biosDirectoryPath;
        let files = yield solfege.util.Node.fs.readdir(directoryPath);
        let total = files.length;

        // Pagination
        let pagination = new Pagination(files, request);
        let list = pagination.getList();
        let offset = pagination.offset;
        let limit = pagination.limit;

        response.statusCode = 200;
        response.setHeader("Content-Range", `${offset}-${limit}/${total}`);
        response.parameters = list;
    }
}

