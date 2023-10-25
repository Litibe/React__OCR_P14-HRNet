import axios from "axios";

export const integrateDataState = () => {
    return async (dispatch) => {
        return await axios
            .get(`./Data/data.json`)
            .then((res) => {
                return dispatch({
                    type: "ADD_DATA_STATES",
                    states: res.data.states,
                });
            })
            .catch((error) => {
                return dispatch({
                    type: "ADD_DATA_STATES",
                    states: undefined,
                });
            });
    };
};

export const integrateDataDepartments = () => {
    return async (dispatch) => {
        return await axios
            .get(`./Data/data.json`)
            .then((res) => {
                return dispatch({
                    type: "ADD_DATA_DEPARTMENTS",
                    departments: res.data.departments,
                });
            })
            .catch((error) => {
                return dispatch({
                    type: "ADD_DATA_DEPARTMENTS",
                    departments: undefined,
                });
            });
    };
};
