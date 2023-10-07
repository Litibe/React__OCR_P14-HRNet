/* eslint-disable array-callback-return */
import IconToSort from "./IconToSort";
import ImportExportEmployees from "./Import";
import NmberShow from "./NmberShow";
import Showing from "./Showing";
import "./table.css";
import { useSelector } from "react-redux";

export default function TableListing() {
    const sortedEmployees = useSelector(
        (state) => state.factoryEmployees.sortedEmployees
    );
    const chunckEmployees = useSelector(
        (state) => state.factoryEmployees.chunck
    );

    const current = useSelector((state) => state.factoryEmployees.current);
    return (
        <div>
            <NmberShow />
            <table id="my-employees">
                <thead>
                    <tr id="td-header">
                        <td>
                            First Name <IconToSort />
                        </td>
                        <td>
                            Last Name <IconToSort />
                        </td>
                        <td>
                            Start Date
                            <IconToSort />
                        </td>
                        <td>
                            Department
                            <IconToSort />
                        </td>
                        <td>
                            Date of Birth
                            <IconToSort />
                        </td>
                        <td>
                            Street
                            <IconToSort />
                        </td>
                        <td>
                            City
                            <IconToSort />
                        </td>
                        <td>
                            State
                            <IconToSort />
                        </td>
                        <td>
                            Zip Code
                            <IconToSort />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {current !== undefined &&
                    chunckEmployees !== undefined &&
                    chunckEmployees.length >= 1 ? (
                        <>
                            {chunckEmployees[current].map((employee, index) => (
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
                            ))}
                        </>
                    ) : (
                        <tr>
                            <td colSpan={9}>No data available in table</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Showing />

            <div className="mx-auto mt-4">
                <ImportExportEmployees />
            </div>
        </div>
    );
}
