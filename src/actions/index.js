export const selectPage = (number) => {
    console.log("You clicked on number: ", number.number);
    return {
        type: 'NUMBER_SELECTED',
        payload: number.number
    }
};
