 const filterByCategory = (sortedVideos,category)=>{
    let filteredlist = sortedVideos;
    if (category !== 'ALL') {
       filteredlist = filteredlist.filter(item => item.categoryName ===  category)
    }
    return filteredlist;
}
export {filterByCategory}