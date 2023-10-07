/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
    sortEmployees,
    showEmployees,
    chunckEmployees,
} from "../../Redux/actions/factoryEmployees.actions";
import { useEffect, useState } from "react";

export default function NmberShow() {
    const employees = useSelector((state) => state.employees);
    const show = useSelector((state) => state.factoryEmployees.show);
    const dispatch = useDispatch();
    const sortedEmployees = useSelector(
        (state) => state.factoryEmployees.sortedEmployees
    );
    useEffect(() => {
        dispatch(sortEmployees(employees, "AZ", "firstName"));
    }, [employees]);

    useEffect(() => {
        if (sortedEmployees !== undefined) {
            dispatch(chunckEmployees(sortedEmployees, show));
        }
    }, [sortedEmployees, show]);
    const [arrayNmber] = useState([1, 2, 10, 25, 50, 100]);
    return (
        <>
            {sortedEmployees !== undefined && (
                <>
                    {sortedEmployees.length > 0 && (
                        <div className="dataTables_length">
                            <label>
                                Show
                                <select
                                    name="employee-table_length"
                                    aria-controls="employee-table"
                                    id="employee-table_length"
                                    onChange={(e) =>
                                        dispatch(showEmployees(e.target.value))
                                    }
                                >
                                    <option value={show}>{show}</option>
                                    {arrayNmber.map(
                                        (nber) =>
                                            parseFloat(nber) !==
                                                parseFloat(show) && (
                                                <option key={nber} value={nber}>
                                                    {nber}
                                                </option>
                                            )
                                    )}
                                </select>
                                entries
                            </label>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
