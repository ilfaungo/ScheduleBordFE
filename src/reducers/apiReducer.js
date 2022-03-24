export default(state = [] , action)=> {
    //console.log(action.payload);
    switch (action.type) {
        case 'RECEIVE_POSTS':
                return action.posts
        case "DELETE_POST":
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]

        case "RESET":
            return state;    
        default: 
            return state;
    } 
}