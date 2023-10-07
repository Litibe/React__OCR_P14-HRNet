import findTraverse from "../../Utils/findTraverse";

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

export const searchWord = (search) => {
    return async (dispatch) => {
        return dispatch({
            type: "SEARCH_WORD",
            search: search,
        });
    };
};

export const searchEmployees = (sortEmployees, search) => {
    return async (dispatch) => {
        const sortedEmployees = [...sortEmployees];
        if (search !== "") {
            let searched = [];
            sortedEmployees.map((element) => {
                if (findTraverse(element, search) === true) {
                    searched.push(element);
                }
            });
            return dispatch({
                type: "SEARCHED_EMPLOYEES",
                searched: searched,
            });
        } else {
            return dispatch({
                type: "SEARCHED_EMPLOYEES",
                searched: sortedEmployees,
            });
        }
    };
};
