export const setReduxValue = (elementName, value) => {
    return {
        type: elementName,
        value: value,
    };
};
