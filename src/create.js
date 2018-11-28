/**
 *
 * @param {Object[]} array
 * @param {string} [idKey="id"]
 * @param {Object} [extraData]
 * @returns {Object} created normalist
 */
function create(array, idKey = "id", extraData = {}) {
    return array.reduce((associalist, element) => {
        if( associalist.byId[idKey] === undefined ) {
            associalist.allIds.push(element[idKey]);
            associalist.byId[element[idKey]] = element;
        }
        return associalist;
    }, Object.assign({ allIds: [],  byId: {}}, extraData));
}

export default create;
