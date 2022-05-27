let initialState = {
    experirnce:null
};
export default function resume(state = initialState, action) {
    switch (action.type) {

        case 'EXPERIENCE':
            return { ...state, experirnce: action.data };
        default:
            return state;
    }
}