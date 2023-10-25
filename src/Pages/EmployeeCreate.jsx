import FormEmployee from "../Components/Employee/Form";

export default function EmployeeCreate() {
    document.title = "HrNet - Create new Employee";
    document.description = "Create new Employee";
    return (
        <main>
            <h1>HrNet</h1>
            <h2>Create Employee</h2>
            <FormEmployee />
        </main>
    );
}
