const videoReducer = (state,{type,payload})=>{
    switch(type){
        case 'LOAD_VIDEOS':
            return {...state,videos:payload}
        case 'FILTER_BY_CATEGORY':
            return {...state,category:payload}
    }
}
export {videoReducer}