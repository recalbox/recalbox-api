import solfege from "solfegejs";

/**
 * An util class to compute the pagination values based on the request
 */
export default class Pagination
{
    /**
     * Constructor
     *
     * @param   {array}                         items       The item
     * @param   {solfege.bundle.server.Request} request     The request
     */
    constructor(items, request)
    {
        this.items = items;

        // Default values
        let page = 1;
        let count = 25;
        let range = null;
        let offset = null;
        let limit = null;
        let total = items.length;

        // Override the values with the request
        if (!isNaN(request.query.count)) {
            count = parseInt(request.query.count);
        }
        if (!isNaN(request.query.page)) {
            page = parseInt(request.query.page);
        }
        if (request.query.range) {
            let rangeSplit = request.query.range.split("-");
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

        let pageCount = Math.ceil(total / count);

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
    getList()
    {
        let list = [];
        let index = this.offset;
        for (; index <= this.limit; index++) {
            list.push(this.items[index]);
        }

        return list;
    }
}
