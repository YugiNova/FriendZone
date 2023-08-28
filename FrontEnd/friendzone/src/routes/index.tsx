import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "react-toastify/dist/ReactToastify.css";
import AuthRoute from "./AuthRoute";
import ClientRoute from "./ClientRoute";
import AuthService from "../services/auth.service";
import PageLoading from "../components/Loading/PageLoading";
import { checkLogin } from "../redux/authSlice";
import { getAuth } from "../redux/selectors";
import { AppDispatch } from "../redux/store";

function AppRoute() {
    const [login, setLogin] = useState<boolean>();
    const auth = new AuthService();
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch<AppDispatch>();
    const authData = useSelector(getAuth);

    useEffect(() => {
        dispatch(checkLogin());
    }, []);

    const showRoute = (status:string) => {
        let component = <PageLoading />
        switch (status) {
            case "loading":
                component =  <PageLoading />
                break;
            case "success":
                component =  <ClientRoute />
                break;
            case "reject":
                component =  <AuthRoute />
                break;
        }
        return component
    };

    return <>{showRoute(authData.status)}</>;
}

export default AppRoute;
