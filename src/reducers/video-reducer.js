const videoReducer = (state,{type,payload})=>{
    switch(type){
        case 'LOAD_VIDEOS':
            return {...state,videos:payload}
        case 'FILTER_BY_CATEGORY':
            return {...state, category:payload}
        case 'SEARCH':
            return {...state, searchQuery:payload};
        default:
            return state;
    }
}
export {videoReducer}