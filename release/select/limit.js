"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyLimitLocally = exports.applyLimit = void 0;
var utils_1 = require("../utils");
function applyLimit(queries, astLimit) {
    (0, utils_1.assert)(astLimit.type === 'number', "LIMIT has to be a number.");
    var limit = (0, utils_1.astValueToNative)(astLimit);
    return queries.map(function (query) { return query.limit(limit); });
}
exports.applyLimit = applyLimit;
function applyLimitLocally(docs, astLimit) {
    var limit = (0, utils_1.astValueToNative)(astLimit);
    docs.splice(limit);
    return docs;
}
exports.applyLimitLocally = applyLimitLocally;
//# sourceMappingURL=limit.js.map