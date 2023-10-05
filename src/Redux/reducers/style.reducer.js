const initialState = {};

export default function style(state = initialState, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return { ...state, showModal: action.showModal };
        case "CLOSE_MODAL":
            return { ...state, showModal: action.showModal };
        default:
            return state;
    }
}
