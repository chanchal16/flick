const playlistReducer = (state,{type,payload})=>{
    switch(type){
        case 'INIT':
            return {...state,playlists:payload,history:payload,likes:payload}
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
        case 'UPDATE_LIKES':
            return {...state,likes:payload}
        case 'GET_WATCHLATER_VIDEOS':
            return {...state, watchlater:payload};
        case 'UPDATE_WATCHLATER':
            return {...state,watchlater:payload}
        case 'UPDATE_HISTORY':
            return {...state,history:payload}
        case 'CLEAR_HISTORY':
            return {...state,history:[]}
        case 'CLEAR':
            return {
                ...state,
                watchlater:[],
                playlists:[],
                likes:[],
                history:[]
            }
        default:
            return state;
    }
}
export {playlistReducer}