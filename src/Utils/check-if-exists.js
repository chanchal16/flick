export const checkIfExists = (array, id) => {
    return array.find((item) => item._id === id);
};