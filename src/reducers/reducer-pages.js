export default function (state = 1, action) {
    switch (action.type) {
        case 'NUMBER_SELECTED':
            return action.payload;
        default:
            return state
    }
}