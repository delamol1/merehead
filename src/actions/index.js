export const selectPage = (number) => {
    return {
        type: 'NUMBER_SELECTED',
        payload: number.number
    }
};
