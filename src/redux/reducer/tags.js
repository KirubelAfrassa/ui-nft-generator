const tags = (state = [], action) => {
    switch (action.type) {
        case "tags":
            return action.value;
        default:
            return state;
    }
};

export default tags;
