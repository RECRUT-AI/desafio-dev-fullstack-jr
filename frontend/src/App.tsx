import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Toast from "./components/Toast";
import "./index.css";
import Guard from "./components/Guard";
import { haveSession } from "./guards/haveSession";
import Home from "./views/Home";
import Login from "./views/Login";
import PageError from "./views/Error";
import { ErrorBoundary } from "react-error-boundary";

function App() {
    return (
        <>
            <Toast></Toast>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login />}></Route>
                    <Route
                        path="home"
                        element={
                            <ErrorBoundary fallback={<PageError></PageError>}>
                                <Guard redirect="/" guards={[haveSession]}>
                                    <Home />
                                </Guard>
                            </ErrorBoundary>
                        }
                    ></Route>
                    {/* <Route path="*" element={<Page404 />}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
