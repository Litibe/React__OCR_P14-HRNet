import { render, screen, waitFor } from "@testing-library/react";
import { userEvent, fireEvent } from "@testing-library/user-event";
import rootReducer from "../../Redux/reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import FormEmployee from "./Form";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
    reducer: rootReducer,
    devTools: false,
});

// setup userEvent
function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}

test("Should render without crash", async () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FormEmployee />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByTestId("firstName")).toBeDefined();
    expect(screen.getByTestId("lastName")).toBeDefined();
    expect(screen.getByTestId("dateOfBirth")).toBeDefined();
    expect(screen.getByTestId("startDate")).toBeDefined();
    expect(screen.getByTestId("street")).toBeDefined();
    expect(screen.getByTestId("city")).toBeDefined();
    expect(screen.getByTestId("zipCode")).toBeDefined();
    expect(screen.getByTestId("btn-submit")).toBeInTheDocument();
});

test("should validate form fields", async () => {
    const { user } = setup(
        <Provider store={store}>
            <MemoryRouter>
                <FormEmployee />
            </MemoryRouter>
        </Provider>
    );

    await user.type(
        screen.getByRole("textbox", { name: /First Name/i }),
        "Edouard"
    );
    await user.type(
        screen.getByRole("textbox", { name: /Last Name/i }),
        "Tartenpion"
    );

    await user.click(screen.getByRole("button", { name: /Save/i }));
    console.log(screen.getAllByTestId("form"));
});
