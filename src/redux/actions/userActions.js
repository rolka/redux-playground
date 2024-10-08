const actions = require('../actionTypes');
const { bookRemoved } = require("./bookActions");
const userAdded = ( username, role ) => {
    return {
        type: actions.USER_ADDED,
        payload: {
            username,
            role
        }
    }
}
const userRemoved = ( id ) => {
    return {
        type: actions.USER_REMOVED,
        payload: {
            id
        }
    }
}
module.exports = { userAdded, userRemoved };