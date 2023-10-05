export const AddNewEmploye = (formData) => {
    // formData for future FETCH API Into request POST
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
