const playlistReducer = (state,{type,payload})=>{
    switch(type){
        case 'INIT':
            return {...state,playlists:payload}
        case 'CREATE_PLAYLIST':
            return {...state,playlists:payload}
        case 'UPDATE_PLAYLIST':
            return {
                ...state,
                 playlists:state.playlists.map(playlist=>playlist._id === payload._id ? payload : playlist)
            }
        case 'DELETE_PLAYLIST':
            return{
                ...state,
                playlists:state.playlists.filter(playlist=>playlist._id !== payload)
            }
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