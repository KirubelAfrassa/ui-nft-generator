export const isEmpty = (strValue) => {
    console.log("re");
    console.log(strValue);
    try {
        return (
            !strValue || strValue.trim() === "" || strValue.trim().length === 0
        );
    } catch (e) {
        return true;
    }
};
