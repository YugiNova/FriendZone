import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./routes";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Provider, useDispatch } from "react-redux/es/exports";
import { Flip, ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import { useEffect } from "react";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Flip}
                />
                <AppRoute />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
