import { useDispatch, useSelector } from "react-redux";
import { loadJsonEmployees } from "../../Redux/actions/employees.actions";
import camelCase from "../../Utils/camelCase";

export default function ImportExportEmployees() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    const handleUploadFiles = (files) => {
        files.some((file) => {
            const fileReader = new FileReader();
            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = (e) => {
                dispatch(loadJsonEmployees(e.target.result));
            };

            return true;
        });

        const input = document.getElementById("file-input");
        input.value = null;
    };
    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadFiles(chosenFiles);
    };

    function toArrayOfObjects(table) {
        try {
            const thead = Array.from(table.tHead.rows[0].children).map(
                (el) => el.textContent
            );
            const rows = table.querySelectorAll("tbody > tr");
            return Array.from(rows).map((row) => {
                const dataCells = Array.from(row.querySelectorAll("td"));
                return thead.reduce((obj, column, index) => {
                    obj[camelCase(column)] = dataCells[index].textContent;
                    return obj;
                }, {});
            });
        } catch {
            return [];
        }
    }

    const exportData = () => {
        const table = document.getElementById("my-employees");
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify({ employees: toArrayOfObjects(table) })
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download =
            "HrNet_employees_" +
            new Date().toISOString().split(".")[0] +
            ".json";
        link.click();
    };
    return (
        <>
            <input
                id="file-input"
                type="file"
                accept="application/json"
                onChange={(e) => handleFileEvent(e)}
                className="inputfile"
                multiple
            />

            <button className="button-action">
                <label id="file-input-label" htmlFor="file-input">
                    Import
                </label>
            </button>
            {employees !== undefined && (
                <>
                    {employees.length > 0 && (
                        <button className="button-action" onClick={exportData}>
                            Export
                        </button>
                    )}
                </>
            )}
        </>
    );
}