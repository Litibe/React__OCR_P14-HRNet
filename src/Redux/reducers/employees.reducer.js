const initialState = [];

export default function employees(state = initialState, action) {
    switch (action.type) {
        case "ADD_NEW_EMPLOYE":
            return [...state, action.newEmploye];

        default:
            return state;
    }
}
