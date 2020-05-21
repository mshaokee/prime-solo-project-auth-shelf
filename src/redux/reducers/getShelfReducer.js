const getShelf = (state = [], action) => {
    if (action.type === 'GET_SHELF'){
        return action.payload;
    }
    return state;
};//end getShelf

export default getShelf;