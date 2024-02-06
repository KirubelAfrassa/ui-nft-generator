const images = (state = [], action) => {
    switch (action.type) {
        case "images":
            return action.value;
        default:
            return state;
    }
};

export default images;
