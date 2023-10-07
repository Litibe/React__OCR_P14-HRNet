import { useDispatch, useSelector } from "react-redux";
import { currentShow } from "../../Redux/actions/factoryEmployees.actions";
import { BsFillSkipStartBtnFill, BsSkipEndBtnFill } from "react-icons/bs";

export default function Showing() {
    const show = useSelector((state) => state.factoryEmployees.show);
    const dispatch = useDispatch();
    const sortedEmployees = useSelector(
        (state) => state.factoryEmployees.sortedEmployees
    );
    const current = useSelector((state) => state.factoryEmployees.current);
    const chunckEmployees = useSelector(
        (state) => state.factoryEmployees.chunck
    );
    return (
        <>
            {sortedEmployees !== undefined && chunckEmployees !== undefined && (
                <>
                    {chunckEmployees.length > 0 && (
                        <div className="pagination">
                            <small>
                                Showing{" "}
                                {1 + parseFloat(show) * parseFloat(current)} to{" "}
                                {parseFloat(show) * parseFloat(current) +
                                    parseFloat(show)}{" "}
                                of {sortedEmployees.length} entries
                            </small>
                            <div>
                                {current !== 0 ? (
                                    <BsFillSkipStartBtnFill
                                        className="icon-pointer"
                                        onClick={() =>
                                            dispatch(currentShow(current - 1))
                                        }
                                    />
                                ) : (
                                    <BsFillSkipStartBtnFill className="icon-pointer-disabled" />
                                )}
                                <span>{current + 1}</span>
                                {console.log(chunckEmployees.length)}
                                {current + 1 < chunckEmployees.length ? (
                                    <BsSkipEndBtnFill
                                        className="icon-pointer"
                                        onClick={() =>
                                            dispatch(currentShow(current + 1))
                                        }
                                    />
                                ) : (
                                    <BsSkipEndBtnFill className="icon-pointer-disabled" />
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
