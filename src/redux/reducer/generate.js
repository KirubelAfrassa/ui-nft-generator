const generate = (state = [], action) => {
    switch (action.type) {
        case "generate":
            return action.value;
        default:
            return state;
    }
};

export default generate;
