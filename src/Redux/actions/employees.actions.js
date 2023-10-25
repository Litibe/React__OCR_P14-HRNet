export const AddNewEmploye = (formData) => {
    // formData for future FETCH API Into request GET
    return async (dispatch) => {
        var object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        return dispatch({
            type: "ADD_NEW_EMPLOYE",
            newEmploye: object,
        });
    };
};

export const loadJsonEmployees = (dataJson) => {
    return async (dispatch) => {
        const json = JSON.parse(dataJson);
        return dispatch({
            type: "LOAD_JSON_EMPLOYEES",
            employees: json.employees,
        });
    };
};
