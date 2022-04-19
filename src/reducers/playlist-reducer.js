const playlistReducer = (state,{type,payload})=>{
    switch(type){
        case 'GET_WATCHLATER_VIDEOS':
            return {...state, watchlater:payload};
        case 'UPDATE_WATCHLATER':
            return {...state,watchlater:payload}
        case 'CLEAR_WATCHLATER':
            return {
                ...state,
                watchlater:[]
            }
        default:
            return state;
    }
}
export {playlistReducer}