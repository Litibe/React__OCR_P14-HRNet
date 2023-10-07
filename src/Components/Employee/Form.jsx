import { useEffect, useState } from "react";
import "./form.css";
import DropDownSelect from "../Pluging/DropDownSelect";
import { useDispatch, useSelector } from "react-redux";
import {
    integrateDataState,
    integrateDataDepartments,
} from "../../Redux/actions/data.actions";
import { AddNewEmploye } from "../../Redux/actions/employees.actions";
import Modal from "../Pluging/Modal";
import { openModal } from "../../Redux/actions/style.action";

export default function FormEmployee() {
    const dataStates = useSelector((state) => state.data.states);
    const dataDepartments = useSelector((state) => state.data.departments);

    const [sendClicked, setSendClicked] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(integrateDataState());
        dispatch(integrateDataDepartments());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickScroll = () => {
        setTimeout(() => {
            const element = document.getElementById("linkListEmployees");
            if (element) {
                // 👇 Will scroll smoothly to the top of the next section
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            "firstName",
            document.getElementById("firstName").value
        );
        formData.append("lastName", document.getElementById("lastName").value);
        formData.append(
            "dateOfBirth",
            document.getElementById("dateOfBirth").value
        );
        formData.append(
            "startDate",
            document.getElementById("startDate").value
        );
        formData.append(
            "department",
            document.getElementById("department").innerText
        );
        formData.append("state", document.getElementById("state").innerText);
        formData.append("street", document.getElementById("street").value);
        formData.append("zipCode", document.getElementById("zipCode").value);
        handleClickScroll();
        dispatch(openModal());
        dispatch(AddNewEmploye(formData));
        setSendClicked(true);
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <fieldset>
                        <legend>Identity :</legend>

                        <div className="form-list">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="John"
                                    maxLength={300}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="Doe"
                                    maxLength={300}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    id="dateOfBirth"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Address :</legend>

                        <div className="form-list">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input
                                    type="text"
                                    name="street"
                                    id="street"
                                    className="form-control"
                                    maxLength={300}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    maxLength={300}
                                />
                            </div>

                            <DropDownSelect
                                className={"form-group"}
                                id={"state"}
                                title={"State"}
                                dataArray={dataStates}
                                keyToWatch={"name"}
                                keyToValue={"abbreviation"}
                                keyToValueDefaultValue={"FL"}
                            />

                            <div className="form-group">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Department</legend>
                        <DropDownSelect
                            className={"form-group"}
                            id={"department"}
                            dataArray={dataDepartments}
                            keyToWatch={"name"}
                            keyToValue={"value"}
                            keyToValueDefaultValue={"Sales"}
                        />
                    </fieldset>
                </div>
                {sendClicked === false ? (
                    <div className="mx-auto">
                        <button className="button-action" type="submit">
                            Save
                        </button>
                    </div>
                ) : (
                    <div className="mx-auto">Employee Saved</div>
                )}
            </form>
            <Modal text={"Employee Created !"} />
        </>
    );
}
