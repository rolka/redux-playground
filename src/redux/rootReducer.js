const { combineReducers } = require('redux');
const booksReducer = require('./reducers/booksReducer');
const usersReducer = require('./reducers/userReducer');

const rootReducer =
    combineReducers({
        books: booksReducer,
        users: usersReducer
    });
module.exports = rootReducer;
