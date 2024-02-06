const preview = (state = [], action) => {
    switch (action.type) {
        case "preview":
            return action.value;
        default:
            return state;
    }
};

export default preview;
