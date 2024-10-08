const { createStore }
    = require("redux");
const rootReducer = require("./rootReducer");
const bookReducer = require("./reducers/booksReducer");
const store = createStore(
    rootReducer,
    // bookReducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
module.exports = store;
