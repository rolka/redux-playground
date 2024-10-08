const bookActions = require('../actionTypes');
const bookAdded = ( title, author ) => {
    return {
        type: bookActions.BOOK_ADDED,
        payload: {
            title,
            author,
        }
    }
}
const bookRemoved = ( id ) => {
    return {
        type: bookActions.BOOK_REMOVED,
        payload: {
            id
        }
    }
}
module.exports = { bookAdded, bookRemoved };