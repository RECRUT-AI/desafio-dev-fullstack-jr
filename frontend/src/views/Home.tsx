import { Edit2Icon, PhoneIcon, PlusIcon, SearchIcon, Trash2Icon, User2Icon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useToastStore } from "../stores/toast";
import useFetch from "../hooks/useFetch";
import { Pet } from "../../../backend/common/pets";
import UserOptions from "../components/UserOptions";
import ModalManagePet from "../components/ModalManagePet";
import useDocumentTitle from "../hooks/documentTitle";

interface PetCardProps {
    pet: Pet;
    setPetList: React.Dispatch<React.SetStateAction<Pet[] | undefined>>;
}

const PetCard = ({ pet, setPetList }: PetCardProps) => {
    const { addToast } = useToastStore();

    const handleDelete = (id: string) => {
        fetch(`http://localhost:3000/pets/?id=${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status > 200 && res.status < 300) {
                    setPetList((list) => list?.filter((pet) => pet.id !== id));
                    addToast({ type: "Sucesso", message: "Pet removido" });
                } else {
                    addToast({ type: "Erro", message: "Aconteceu um erro..." });
                }
            })
            .catch((e) => {
                console.log(e);
                addToast({ type: "Erro", message: "Aconteceu um erro..." });
            });
    };

    return (
        <div
            key={pet.id}
            className="flex w-full flex-col space-y-2 rounded-md p-2 text-gray-900 shadow-lg"
        >
            <img src={pet.avatar} alt="dog" className="w-full rounded-md object-cover" />
            <div className="flex flex-row items-center justify-between">
                <span className="text-lg font-semibold">
                    {pet.name}, {pet.age > 1 ? `${pet.age} anos` : `${pet.age} ano`}
                </span>
                <span>
                    {pet.sex == "Male" ? (
                        <svg fill="currentColor" viewBox="0 0 16 16" className="h-6 w-6">
                            <path
                                fillRule="evenodd"
                                d="M9.5 2a.5.5 0 010-1h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.707L9.871 6.836a5 5 0 11-.707-.707L13.293 2H9.5zM6 6a4 4 0 100 8 4 4 0 000-8z"
                            />
                        </svg>
                    ) : (
                        <svg fill="currentColor" viewBox="0 0 16 16" className="h-6 w-6">
                            <path
                                fillRule="evenodd"
                                d="M8 1a4 4 0 100 8 4 4 0 000-8zM3 5a5 5 0 115.5 4.975V12h2a.5.5 0 010 1h-2v2.5a.5.5 0 01-1 0V13h-2a.5.5 0 010-1h2V9.975A5 5 0 013 5z"
                            />
                        </svg>
                    )}
                </span>
            </div>
            <span className="text-gray-600">
                {pet.type}, {pet.brand}
            </span>
            <div className="flex flex-col space-y-1">
                <span className="label">Dono(a)</span>
                <div className="flex flex-row items-center space-x-1">
                    <User2Icon className="h-4 w-4 text-[#f94f46]"></User2Icon>
                    <span>{pet.ownerName}</span>
                </div>
                <div className="flex flex-row items-center space-x-1">
                    <PhoneIcon className="h-4 w-4 text-[#f94f46]"></PhoneIcon>
                    <span>{pet.ownerPhone}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-gray-200 py-2">
                <ModalManagePet
                    setPetList={setPetList}
                    pet={pet}
                    type="Edit"
                    trigger={
                        <div className="button secondary flex flex-row items-center justify-center space-x-2 text-sm text-black">
                            <Edit2Icon className="h-4 w-4"></Edit2Icon>
                            <span>Editar</span>
                        </div>
                    }
                ></ModalManagePet>
                <button
                    type="button"
                    onClick={() => handleDelete(pet.id)}
                    className="button danger flex flex-row items-center justify-center space-x-2 text-sm"
                >
                    <Trash2Icon className="h-4 w-4"></Trash2Icon>
                    <span>Deletar</span>
                </button>
            </div>
        </div>
    );
};

export default function Home() {
    useDocumentTitle("Fluffy home");

    const [currentURL, setCurrentURL] = useState<string>("http://localhost:3000/pets");
    const [search, setSearch] = useState<string>("");
    const timeout = useRef<any>();

    const { data } = useFetch<Pet[]>(currentURL);
    const [petList, setPetList] = useState<Pet[] | undefined>(undefined);

    useEffect(() => {
        setPetList(data);
    }, [data]);

    const handleSearch = (event: any) => {
        const input = event.target.value;
        setSearch(input);

        return new Promise<Pet[]>(() => {
            clearTimeout(timeout.current);

            timeout.current = setTimeout(async () => {
                timeout.current = null;
                setPetList(undefined);

                if (input == "") {
                    setCurrentURL("http://localhost:3000/pets");
                } else {
                    setCurrentURL(`http://localhost:3000/pets/search/?query=${input}`);
                }
            }, 500);
        });
    };

    return (
        <div className="flex h-screen w-screen flex-col overflow-y-auto scrollbar-thin">
            <div className="mb-4 flex w-full flex-row justify-between p-2 shadow-md">
                <div className="flex flex-row space-x-4">
                    <button
                        type="button"
                        className="flex flex-row items-center space-x-2 text-[#f94f46]"
                    >
                        <svg viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5">
                            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3-14.4-70.1 10.1-84.1 59.7.9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2-25.8 0-46.7-20.9-46.7-46.7v-1.6c0-10.4 1.6-20.8 5.2-30.5zm352.6-118.5c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zm-111.7-93c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z" />
                        </svg>
                        <span className="text-lg font-semibold">Fluff™</span>
                    </button>
                    <ModalManagePet
                        setPetList={setPetList}
                        type="Create"
                        trigger={
                            <div className="button primary flex flex-row items-center space-x-2">
                                <PlusIcon className="h-5 w-5"></PlusIcon>
                                <span>Adicione um pet</span>
                            </div>
                        }
                    ></ModalManagePet>
                </div>
                <UserOptions></UserOptions>
            </div>
            <div className="relative mx-auto flex w-full max-w-3xl flex-grow flex-col space-y-2 p-2">
                <div className="flex w-full flex-row space-x-2">
                    <input
                        value={search}
                        onChange={handleSearch}
                        type="text"
                        name="search"
                        placeholder="Procure um pet..."
                        className="flex-grow rounded-md bg-gray-100 p-3 focus:outline-none focus:ring-0"
                    />
                    <button
                        type="button"
                        onClick={() =>
                            handleSearch({
                                target: {
                                    value: search,
                                },
                            })
                        }
                        className="primary flex-none rounded-md p-3"
                    >
                        <SearchIcon className="h-6 w-6 text-white"></SearchIcon>
                    </button>
                </div>

                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {petList == undefined ? (
                        <>
                            {new Array(6).fill(0).map((_, index) => (
                                <div key={index} className="flex flex-col space-y-2 p-2">
                                    <div className="h-64 w-full animate-pulse rounded-xl bg-gray-200 sm:h-full"></div>
                                    <div className="h-14 w-full animate-pulse rounded-2xl bg-gray-200"></div>
                                    <div className="h-5 w-full animate-pulse rounded-2xl bg-gray-200"></div>
                                    <div className="h-5 w-full animate-pulse rounded-2xl bg-gray-200"></div>
                                    <div className="h-5 w-full animate-pulse rounded-2xl bg-gray-200"></div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {petList.length == 0 ? (
                                <div className="absolute inset-[30%] flex h-[24rem] w-96 flex-col items-center justify-center">
                                    <img
                                        src="/not-found.svg"
                                        alt="Hero image"
                                        className="w-80 object-cover"
                                    />
                                    <span className="p-2 font-semibold text-gray-600">
                                        Nenhum pet encontrado.
                                    </span>
                                </div>
                            ) : (
                                <>
                                    {petList.map((pet) => {
                                        return (
                                            <PetCard pet={pet} setPetList={setPetList}></PetCard>
                                        );
                                    })}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
