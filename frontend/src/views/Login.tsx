import React, { useRef } from "react";
import { useToastStore } from "../stores/toast";
import { useNavigate } from "react-router-dom";
import { User, UserSchema } from "../../../backend/common/user";
import useDocumentTitle from "../hooks/documentTitle";

export default function Login() {
    useDocumentTitle("Fluffy login");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const { addToast } = useToastStore();

    const navigate = useNavigate();

    const handleAdd = (payload: User) => {
        fetch(`http://localhost:3000/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((raw) => {
                if (raw.status >= 200 && raw.status < 300) {
                    addToast({ type: "Sucesso", message: "Logado" });
                    localStorage.setItem("token", `${+new Date()}`);

                    navigate("/home");
                } else if (raw.status == 400) {
                    addToast({ type: "Erro", message: "Campos de email e senha inválidos." });
                } else {
                    addToast({
                        type: "Info",
                        message: "Usuário não cadastrado, que tal tentar costa@email.com e 123 ?",
                    });
                }
            })
            .catch((e) => {
                console.log(e);
                addToast({ type: "Erro", message: "Aconteceu um erro..." });
            });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const parse = UserSchema.parse({
                email: (emailRef.current as any).value,
                password: (passwordRef.current as any).value,
            });

            handleAdd(parse);
        } catch (e) {
            console.log(e);
            addToast({
                type: "Erro",
                message: "Campos inválidos",
            });
        }
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
            <div className="h-screen w-screen overflow-y-auto rounded-md bg-white p-2 shadow-lg scrollbar-none lg:h-4/6 lg:w-8/12">
                <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
                    <div className="hidden h-full w-full flex-col items-center justify-center space-y-2 lg:flex">
                        <img src="/hero.svg" alt="Hero image" className="w-80 object-cover" />
                        <h1 className="text-4xl font-bold">Fluff™</h1>
                        <span className="text-gray-600">A very long text here</span>
                    </div>
                    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
                        <h1 className="py-8 text-4xl font-bold">Welcome!</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full flex-col space-y-3 px-16"
                        >
                            <div className="flex flex-col space-y-1">
                                <label className="label">Email</label>
                                <input
                                    ref={emailRef}
                                    type="text"
                                    name="login"
                                    defaultValue="costa@email.com"
                                    placeholder="Login..."
                                    autoFocus
                                    className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="label">Password</label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    name="password"
                                    placeholder="Password..."
                                    className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                                />
                            </div>
                            <button type="submit" className="button primary">
                                Login
                            </button>
                            <span className="bg-animation cursor-pointer self-end text-sm text-gray-600 underline hover:text-gray-700">
                                Create account
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
