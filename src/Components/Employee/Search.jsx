/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
    searchWord,
    searchEmployees,
    chunckEmployees,
} from "../../Redux/actions/factoryEmployees.actions";

export default function Search() {
    const dispatch = useDispatch();
    const sortedEmployees = useSelector(
        (state) => state.factoryEmployees.sortedEmployees
    );
    const search = useSelector((state) => state.factoryEmployees.search);
    const show = useSelector((state) => state.factoryEmployees.show);
    const searchedEmployees = useSelector(
        (state) => state.factoryEmployees.searched
    );

    useEffect(() => {
        if (sortedEmployees !== undefined && search !== undefined) {
            dispatch(searchEmployees(sortedEmployees, search));
        }
    }, [sortedEmployees, search]);

    useEffect(() => {
        if (searchedEmployees !== undefined) {
            dispatch(chunckEmployees(searchedEmployees, show));
        }
    }, [searchedEmployees, show]);

    return (
        <div>
            <label>
                Search:
                <input
                    type="search"
                    aria-controls="employee-table"
                    onChange={(e) => dispatch(searchWord(e.target.value))}
                    className="ms-1"
                    defaultValue={search}
                    name="searchWord"
                    id="searchWord"
                />
            </label>
        </div>
    );
}
