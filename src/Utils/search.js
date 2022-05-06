const searchVideos = (videos,searchQuery)=>{
    return videos.filter((video) => {
        //if no input the return the original
        if (searchQuery === '') {
            return video;
        }
        //return the video which contains the user input
        else {
            return video?.title?.toLowerCase().includes(searchQuery)
        }
    })
}
export {searchVideos}