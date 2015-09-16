"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

var _fileSize = require("file-size");

var _fileSize2 = _interopRequireDefault(_fileSize);

var _path = require("path");

/**
 * An util class to get file informations
 */

var FileInfo = (function () {
    /**
     * Constructor
     *
     * @param   {string}    path    The file path
     */

    function FileInfo(path) {
        _classCallCheck(this, FileInfo);

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

    _createClass(FileInfo, [{
        key: "getSize",
        value: function* getSize() {
            var raw = yield this.getRaw();

            return raw.size;
        }

        /**
         * Get the modification time
         *
         * @return  {Date}      The time
         */
    }, {
        key: "getModificationTime",
        value: function* getModificationTime() {
            var raw = yield this.getRaw();

            return raw.mtime;
        }

        /**
         * Get the creation time
         *
         * @return  {Date}      The time
         */
    }, {
        key: "getCreationTime",
        value: function* getCreationTime() {
            var raw = yield this.getRaw();

            return raw.birthtime;
        }

        /**
         * Get the access time
         *
         * @return  {Date}      The time
         */
    }, {
        key: "getAccessTime",
        value: function* getAccessTime() {
            var raw = yield this.getRaw();

            return raw.atime;
        }

        /**
         * Get all metadata
         *
         * @return  {object}    The metadatas
         */
    }, {
        key: "getMetadata",
        value: function* getMetadata() {
            var size = yield this.getSize();
            var modificationTime = yield this.getModificationTime();
            var accessTime = yield this.getAccessTime();
            var creationTime = yield this.getCreationTime();
            var metadata = {
                basename: (0, _path.basename)(this.path),
                size: size,
                sizeHuman: (0, _fileSize2["default"])(size).human(),
                modificationTime: modificationTime,
                accessTime: accessTime,
                creationTime: creationTime,
                md5: yield _solfegejs2["default"].util.Crypto.getFileMd5(this.path)
            };

            return metadata;
        }

        /**
         * Get the raw informations
         *
         * @return  {object}    The raw informations
         */
    }, {
        key: "getRaw",
        value: function* getRaw() {
            if (!this.raw) {
                this.raw = yield _solfegejs2["default"].util.Node.fs.stat(this.path);
            }

            return this.raw;
        }
    }]);

    return FileInfo;
})();

exports["default"] = FileInfo;
module.exports = exports["default"];