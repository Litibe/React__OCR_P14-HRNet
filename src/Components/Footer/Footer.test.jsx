import { render } from "@testing-library/react";
import Footer from "./Footer";

test("Should render without crash", async () => {
    render(<Footer />);
});
