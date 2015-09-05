"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _solfegejs = require("solfegejs");

var _solfegejs2 = _interopRequireDefault(_solfegejs);

/**
 * An util class to compute the pagination values based on the request
 */

var Pagination = (function () {
    /**
     * Constructor
     *
     * @param   {array}                         items       The item
     * @param   {solfege.bundle.server.Request} request     The request
     */

    function Pagination(items, request) {
        _classCallCheck(this, Pagination);

        this.items = items;

        // Default values
        var page = 1;
        var count = 25;
        var range = null;
        var offset = null;
        var limit = null;
        var total = items.length;

        // Override the values with the request
        if (!isNaN(request.query.count)) {
            count = parseInt(request.query.count);
        }
        if (!isNaN(request.query.page)) {
            page = parseInt(request.query.page);
        }
        if (request.query.range) {
            var rangeSplit = request.query.range.split("-");
            if (rangeSplit.length === 2) {
                offset = parseInt(rangeSplit[0]);
                limit = parseInt(rangeSplit[1]);
            }
        }

        if (offset === null) {
            offset = (page - 1) * count;
        }
        if (limit === null) {
            limit = offset + count - 1;
        }
        if (limit >= total) {
            limit = total - 1;
        }

        var pageCount = Math.ceil(total / count);

        // Expose the values
        this.count = count;
        this.offset = offset;
        this.limit = limit;
        this.page = page;
        this.pageCount = pageCount;
    }

    /**
     * Get the list
     *
     * @return  {array}     The list
     */

    _createClass(Pagination, [{
        key: "getList",
        value: function getList() {
            var list = [];
            var index = this.offset;
            for (; index <= this.limit; index++) {
                list.push(this.items[index]);
            }

            return list;
        }
    }]);

    return Pagination;
})();

exports["default"] = Pagination;
module.exports = exports["default"];