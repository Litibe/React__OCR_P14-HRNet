const initialState = {};

export default function data(state = initialState, action) {
    switch (action.type) {
        case "ADD_DATA_STATES":
            return { ...state, states: action.states };
        case "ADD_DATA_DEPARTMENTS":
            return { ...state, departments: action.departments };
        default:
            return state;
    }
}
