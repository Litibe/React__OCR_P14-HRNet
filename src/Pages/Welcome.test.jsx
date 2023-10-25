import { render } from "@testing-library/react";
import Welcome from "./Welcome";

test("Should render without crash", async () => {
    render(<Welcome />);
});
