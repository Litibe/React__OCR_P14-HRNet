const initialState = [];

export default function employees(state = initialState, action) {
    switch (action.type) {
        case "ADD_NEW_EMPLOYE":
            return [...state, action.newEmploye];
        case "LOAD_JSON_EMPLOYEES":
            const employees = action.employees;
            Array.prototype.push.apply(employees, state);
            return employees;
        default:
            return state;
    }
}
