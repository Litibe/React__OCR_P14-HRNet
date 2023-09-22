import {
    createBrowserRouter,
    createRoutesFromElements,
    useNavigate,
    Route,
    Outlet,
} from "react-router-dom";
import { useEffect, useContext } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PageError from "../Pages/404";
import EmployeeCreate from "../Pages/EmployeeCreate";
import EmployeeList from "../Pages/EmployeeList";

export default function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route>
                    <Route
                        index
                        path="/"
                        element={
                            <>
                                <Header />

                                <Footer />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/create"
                        element={
                            <>
                                <Header />
                                <EmployeeCreate />
                                <Footer />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/list"
                        element={
                            <>
                                <Header />
                                <EmployeeList />
                                <Footer />
                            </>
                        }
                    ></Route>

                    <Route
                        path="*"
                        element={
                            <>
                                <Header />
                                <PageError /> <Footer />
                            </>
                        }
                        status={404}
                    ></Route>
                </Route>
            </>
        )
    );
    return router;
}
