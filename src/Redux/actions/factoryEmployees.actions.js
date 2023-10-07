export const sortEmployees = (employees, sort, key) => {
    return async (dispatch) => {
        const sortedEmployees = [...employees];
        if (sort === "AZ") {
            return dispatch({
                type: "SORTED_EMPLOYEES",
                sortedEmployees: sortedEmployees.sort((a, b) =>
                    a[key] > b[key] ? 1 : -1
                ),
            });
        } else {
            return dispatch({
                type: "SORTED_EMPLOYEES",
                sortedEmployees: sortedEmployees.sort((a, b) =>
                    a[key] > b[key] ? -1 : 1
                ),
            });
        }
    };
};

export const showEmployees = (number) => {
    return async (dispatch) => {
        return dispatch({
            type: "SHOW_EMPLOYEES",
            show: number,
        });
    };
};

export const currentShow = (number) => {
    return async (dispatch) => {
        return dispatch({
            type: "CURRENT_SHOW",
            current: number,
        });
    };
};

export const chunckEmployees = (sortEmployees, number) => {
    return async (dispatch) => {
        let chunks = [];
        for (let i = 0; i < sortEmployees.length; i += number) {
            chunks.push(sortEmployees.slice(i, i + number));
        }
        return dispatch({
            type: "CHUNCK_EMPLOYEES",
            chunck: chunks,
        });
    };
};
