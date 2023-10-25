import { render } from "@testing-library/react";
import rootReducer from "../Redux/reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import EmployeeCreate from "./EmployeeCreate";

const store = configureStore({
    reducer: rootReducer,
    devTools: false,
});

test("Should render without crash", async () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmployeeCreate />
            </MemoryRouter>
        </Provider>
    );
});
