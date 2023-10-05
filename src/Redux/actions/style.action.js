export const openModal = () => {
    return (dispatch) => {
        return dispatch({
            type: "OPEN_MODAL",
            showModal: true,
        });
    };
};

export const closeModal = () => {
    return (dispatch) => {
        return dispatch({
            type: "CLOSE_MODAL",
            showModal: false,
        });
    };
};
