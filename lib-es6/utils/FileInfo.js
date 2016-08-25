import solfege from "solfegejs";
import filesize from "file-size";
import {basename} from "path";

/**
 * An util class to get file informations
 */
export default class FileInfo
{
    /**
     * Constructor
     *
     * @param   {string}    path    The file path
     */
    constructor(path)
    {
        // The file path
        this.path = path;

        // The file raw informations
        this.raw = null;
    }

    /**
     * Get the file size
     *
     * @return  {integer}   The file size
     */
    *getSize()
    {
        let raw = yield this.getRaw();

        return raw.size;
    }

    /**
     * Get the modification time
     *
     * @return  {Date}      The time
     */
    *getModificationTime()
    {
        let raw = yield this.getRaw();

        return raw.mtime;
    }

    /**
     * Get the creation time
     *
     * @return  {Date}      The time
     */
    *getCreationTime()
    {
        let raw = yield this.getRaw();

        return raw.birthtime;
    }

    /**
     * Get the access time
     *
     * @return  {Date}      The time
     */
    *getAccessTime()
    {
        let raw = yield this.getRaw();

        return raw.atime;
    }

    /**
     * Get all metadata
     *
     * @return  {object}    The metadatas
     */
    *getMetadata()
    {
        let size = yield this.getSize();
        let modificationTime = yield this.getModificationTime();
        let accessTime = yield this.getAccessTime();
        let creationTime = yield this.getCreationTime();
        let metadata = {
            basename: basename(this.path),
            size: size,
            sizeHuman: filesize(size).human(),
            modificationTime: modificationTime,
            accessTime: accessTime,
            creationTime: creationTime,
            md5: yield solfege.util.Crypto.getFileMd5(this.path)
        };

        return metadata;
    }

    /**
     * Get the raw informations
     *
     * @return  {object}    The raw informations
     */
    *getRaw()
    {
        if (!this.raw) {
            this.raw = yield solfege.util.Node.fs.stat(this.path);
        }

        return this.raw;
    }
}
