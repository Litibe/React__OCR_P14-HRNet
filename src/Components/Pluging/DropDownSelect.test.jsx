import { render } from "@testing-library/react";
import rootReducer from "../../Redux/reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import DropDownSelect from "./DropDownSelect";

const store = configureStore({
    reducer: rootReducer,
    devTools: false,
});

test("without data", async () => {
    render(
        <Provider store={store}>
            <DropDownSelect />
        </Provider>
    );
});
