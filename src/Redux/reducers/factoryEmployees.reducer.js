const initialState = { show: 1, current: 0 };

export default function factoryEmployees(state = initialState, action) {
    switch (action.type) {
        case "SORTED_EMPLOYEES":
            return { ...state, sortedEmployees: action.sortedEmployees };
        case "SHOW_EMPLOYEES":
            return { ...state, show: action.show };
        case "CURRENT_SHOW":
            return { ...state, current: action.current };
        case "CHUNCK_EMPLOYEES":
            return { ...state, chunck: action.chunck };
        default:
            return state;
    }
}
