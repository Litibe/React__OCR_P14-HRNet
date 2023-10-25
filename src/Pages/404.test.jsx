import { render } from "@testing-library/react";
import PageError from "./404";

test("Should render without crash", async () => {
    render(<PageError />);
});
