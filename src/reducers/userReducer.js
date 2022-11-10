const initialState = {
    user: null,
    message: null,
}

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case 'USER_FETCH_SUCCEEDED':
            return { 
                user: action.user,
                message: null, 
            }
        case 'USER_FETCH_FAILED':
        return { 
            user: null,
            message: action.message, 
        }
        default:
            return state;
    }
}