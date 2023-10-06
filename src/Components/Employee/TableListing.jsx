import ImportExportEmployees from "./Import";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";

export default function TableListing() {
    const employees = useSelector((state) => state.employees);

    console.log(employees);

    return (
        <div>
            <table id="my-employees">
                <thead>
                    <tr id="td-header">
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Start Date</td>
                        <td>Department</td>
                        <td>Date of Birth</td>
                        <td>Street</td>
                        <td>City</td>
                        <td>State</td>
                        <td>Zip Code</td>
                    </tr>
                </thead>
                <tbody>
                    {employees !== undefined && employees.length >= 1 ? (
                        <>
                            {employees.map((employee, index) => (
                                <>
                                    {
                                        <tr key={index}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.startDate}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.dateOfBirth}</td>
                                            <td>{employee.street}</td>
                                            <td>{employee.city}</td>
                                            <td>{employee.state}</td>
                                            <td>{employee.zipCode}</td>
                                        </tr>
                                    }
                                </>
                            ))}
                        </>
                    ) : (
                        <tr>
                            <td colSpan={9}>No data available in table</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="mx-auto mt-4">
                <ImportExportEmployees />
            </div>
        </div>
    );
}
