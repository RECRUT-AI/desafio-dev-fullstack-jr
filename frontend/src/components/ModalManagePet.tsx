import React, { ChangeEvent, useRef, useState } from "react";
import { Pet, PetSchema, PetSex, PetType } from "../../../backend/common/pets";
import { useToastStore } from "../stores/toast";
import Modal from "./Dialog";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import InputMask from "react-input-mask";

interface ManagePetProps {
    type: "Create" | "Edit";
    pet?: Pet;
    trigger: React.ReactNode;
    setPetList: React.Dispatch<React.SetStateAction<Pet[] | undefined>>;
}

const NOT_FOUND = -1;

export default function ModalManagePet({ type, pet, trigger, setPetList }: ManagePetProps) {
    const nameRef = useRef(null);
    const brandRef = useRef(null);
    const ownerRef = useRef(null);
    const [age, setAge] = useState<number>(pet ? pet.age : 0);
    const phoneRef = useRef(null);
    const avatarRef = useRef(null);
    const [petType, setPetType] = useState<PetType>(pet ? pet.type : "Gato");
    const [petSex, setPetSex] = useState<PetSex>(pet ? pet.sex : "Female");

    const handleEdit = (payload: { id: string; changes: Partial<Pet> }) => {
        fetch(`http://localhost:3000/pets`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((raw) => {
                if (raw.status >= 200 && raw.status < 300) {
                    addToast({ type: "Carregando", message: "Editando pet..." });
                }

                return raw.json();
            })
            .then((res) => {
                setOpen(false);
                setPetList((list) => {
                    if (!list) {
                        return undefined;
                    } else {
                        const find = list.findIndex((pet) => pet.id == res.id);

                        if (find != NOT_FOUND) {
                            addToast({ type: "Sucesso", message: "Pet editado!" });
                            list[find] = res;

                            console.log(list);
                        }

                        return list;
                    }
                });
            })
            .catch((e) => {
                console.log(e);
                addToast({ type: "Erro", message: "Aconteceu um erro..." });
            });
    };

    const handleAdd = (payload: Omit<Pet, "id">) => {
        fetch(`http://localhost:3000/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((raw) => {
                if (raw.status >= 200 && raw.status < 300) {
                    addToast({ type: "Carregando", message: "Adicionando pet..." });
                }

                return raw.json();
            })
            .then((res) => {
                setOpen(false);
                setPetList((list) => {
                    if (!list) {
                        return undefined;
                    } else {
                        addToast({ type: "Sucesso", message: "Pet adicionado" });
                        return [{ id: res.id, ...payload }, ...list];
                    }
                });
            })
            .catch((e) => {
                console.log(e);
                addToast({ type: "Erro", message: "Aconteceu um erro..." });
            });
    };

    const handleManagePet = async (event: React.FormEvent) => {
        event.preventDefault();

        const name = (nameRef.current as any).value;
        const brand = (brandRef.current as any).value;
        const owner = (ownerRef.current as any).value;
        const phone = (phoneRef.current as any).value;
        const avatar = (avatarRef.current as any).value;

        if (type == "Create") {
            const payload: Omit<Pet, "id"> = {
                type: petType,
                avatar,
                name,
                age,
                brand,
                ownerName: owner,
                ownerPhone: phone,
                sex: petSex,
            };

            try {
                PetSchema.omit({ id: true }).parse(payload);
                handleAdd(payload);
            } catch (e) {
                console.log(e);
                addToast({ type: "Erro", message: "Verifique os campos" });
            }
        } else {
            const name = (nameRef.current as any).value;
            const brand = (brandRef.current as any).value;
            const owner = (ownerRef.current as any).value;
            const phone = (phoneRef.current as any).value;
            const avatar = (avatarRef.current as any).value;

            const payload: { id: string; changes: Partial<Pet> } = {
                id: pet!.id,
                changes: {
                    type: petType,
                    avatar,
                    name,
                    age,
                    brand,
                    ownerName: owner,
                    ownerPhone: phone,
                    sex: petSex,
                },
            };

            try {
                PetSchema.omit({ id: true }).parse(payload.changes);
                handleEdit(payload);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const { addToast } = useToastStore();

    const [open, setOpen] = useState<boolean>(false);

    const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const floatValue = parseFloat(inputValue);

        if (inputValue === "" || isNaN(floatValue) || floatValue < 0) {
            setAge(0);
        } else {
            setAge(floatValue);
        }
    };

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            trigger={trigger}
            title={
                <div className="flex w-full flex-row space-x-2 border-b border-gray-200 p-1 text-lg font-semibold">
                    {type == "Edit" ? "Salvar alterações" : "Adicionar Pet"}
                </div>
            }
            className="lg:w-68 h-screen w-screen lg:h-[38rem] "
        >
            <div className="relative flex h-full w-full flex-col px-4 py-2">
                <form onSubmit={handleManagePet} className="flex w-full flex-grow flex-col">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex flex-col space-y-1">
                            <label className="label">Nome</label>
                            <input
                                ref={nameRef}
                                defaultValue={pet ? pet.name : ""}
                                type="text"
                                name="name"
                                placeholder="Nome do pet..."
                                className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="label">Avatar</label>
                            <input
                                ref={avatarRef}
                                defaultValue={pet ? pet.avatar : ""}
                                type="text"
                                name="name"
                                placeholder="URI da imagem..."
                                className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="label">Idade</label>
                            <input
                                type="number"
                                onChange={handleChangeAge}
                                value={age}
                                className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="grid w-full grid-cols-2 gap-2">
                            <div className="flex flex-col space-y-1">
                                <label className="label">Tipo</label>
                                <RadioGroup
                                    defaultValue={petType}
                                    onValueChange={(value: PetType) => setPetType(value)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Cachorro" />
                                        <span>Cachorro</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Gato" />
                                        <span>Gato</span>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="label">Sexo</label>
                                <RadioGroup
                                    defaultValue={petSex}
                                    onValueChange={(value: PetSex) => setPetSex(value)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Male" />
                                        <span>Masculino</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Female" />
                                        <span>Feminino</span>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="label">Raça</label>
                            <input
                                ref={brandRef}
                                defaultValue={pet ? pet.brand : ""}
                                type="text"
                                name="brand"
                                placeholder="Raça do pet..."
                                className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="label">Dono(a)</label>
                            <input
                                ref={ownerRef}
                                defaultValue={pet ? pet.ownerName : ""}
                                type="text"
                                name="ownersname"
                                placeholder="Nome do(a) dono(a)..."
                                className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="label">Telefone</label>
                            <InputMask
                                ref={phoneRef}
                                defaultValue={pet ? pet.ownerPhone : ""}
                                mask="(99)99999-9999"
                                maskChar={"_"}
                                alwaysShowMask
                                className="rounded-md bg-gray-100 px-2 py-1 focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="button primary absolute bottom-0 right-0 self-end"
                    >
                        {type == "Edit" ? "Salvar alterações" : "Adicionar"}
                    </button>
                </form>
            </div>
        </Modal>
    );
}
