import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

interface Props {
    children: ReactNode;
    redirect: string;
    guards: (() => Promise<boolean>)[];
}

export default function Guard({ children, redirect, guards }: Props) {
    const authorized = useRef<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const loader = async () => {
            for (let i = 0; i < guards.length && authorized.current; i++) {
                authorized.current = await guards[i]();
            }

            setIsLoading(false);
        };

        if (location.pathname == "/app" || location.pathname == "/app/") {
            navigate("/app/today");
        }

        if (location.pathname == "/app/settings" || location.pathname == "app/settings/") {
            navigate("/app/settings/workspace");
        }

        loader();
    }, []);

    if (isLoading)
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-skin-base">
                <div className="flex">
                    <Spinner size="8" />
                </div>
            </div>
        );

    if (authorized.current) {
        return <>{children}</>;
    }

    return <Navigate to={redirect} replace />;
}
