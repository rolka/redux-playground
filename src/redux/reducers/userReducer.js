const initialState = [];
let lastId = 0;
const actions = require('../actionTypes');
const usersReducer = ( state = initialState, action ) => {
    switch (action.type )
    {
        case actions.USER_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    username: action.payload.username,
                    role: action.payload.role
                }
            ]
        case actions.USER_REMOVED:
            return state.filter(user => user.id !== action.payload.id);
        default:
            return state;
    }
}
module.exports = usersReducer;