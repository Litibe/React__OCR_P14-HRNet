const initialState = { show: 10, current: 0, search: "" };

export default function factoryEmployees(state = initialState, action) {
    switch (action.type) {
        case "SORTED_EMPLOYEES":
            return { ...state, sortedEmployees: action.sortedEmployees };
        case "CHUNCK_EMPLOYEES":
            return { ...state, chunck: action.chunck };
        case "SHOW_EMPLOYEES":
            return { ...state, show: action.show };
        case "CURRENT_SHOW":
            return { ...state, current: action.current };
        case "SEARCH_WORD":
            return { ...state, search: action.search };
        case "SEARCHED_EMPLOYEES":
            return { ...state, searched: action.searched };
        default:
            return state;
    }
}
