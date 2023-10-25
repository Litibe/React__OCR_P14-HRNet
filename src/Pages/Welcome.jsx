import logo from "../Assets/15974125765772_image2.jpg";

export default function Welcome() {
    document.title = "HrNet - Welcome";
    document.description = "Welcome";

    return (
        <main>
            <div className="d-column">
                <h1>Welcome !</h1>
                <img src={logo} alt="Logo - HrNet" />
            </div>
        </main>
    );
}
