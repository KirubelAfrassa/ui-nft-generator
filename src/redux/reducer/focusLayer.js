const focusLayer = (state = 0, action) => {
    switch (action.type) {
        case "selectedFocus":
            return action.value;
        default:
            return state;
    }
};

export default focusLayer;
