export const VideoExists = (array, id) => {
    return array.find((item) => item._id === id);
};