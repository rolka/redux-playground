const initialState = [];
const actions = require('../actionTypes');
let lastId = 0;
const booksReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actions.BOOK_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    title: action.payload.title,
                    author: action.payload.author
                }
            ]
        case actions.BOOK_REMOVED:
            return state.filter(book => book.id !== action.payload.id);
        default:
            return state;
    }
}
module.exports = booksReducer;