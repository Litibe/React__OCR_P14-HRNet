import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { sortEmployees } from "../../Redux/actions/factoryEmployees.actions";
import { useDispatch, useSelector } from "react-redux";
import camelCase from "../../Utils/camelCase";

export default function IconToSort() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);

    return (
        <span>
            <IoMdArrowDropup
                className="icon-pointer"
                onClick={(e) =>
                    dispatch(
                        sortEmployees(
                            employees,
                            "AZ",
                            camelCase(e.target.parentNode.parentNode.innerText)
                        )
                    )
                }
            />
            <IoMdArrowDropdown
                className="icon-pointer"
                onClick={(e) =>
                    dispatch(
                        sortEmployees(
                            employees,
                            "ZA",
                            camelCase(e.target.parentNode.parentNode.innerText)
                        )
                    )
                }
            />
        </span>
    );
}
