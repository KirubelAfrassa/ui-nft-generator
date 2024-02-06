const layers = (state = [], action) => {
    switch (action.type) {
        case "layers":
            return action.value;
        default:
            return state;
    }
};

export default layers;
