import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/15974125765772_image2.jpg";
export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo - HrNet" className="logo" />
            <Link to="/create">Create Employee</Link>
            <Link to="/list" id={"linkListEmployees"}>
                List Employees
            </Link>
        </header>
    );
}
