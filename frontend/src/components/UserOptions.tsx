import React from "react";
import { useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./Dropdown";
import { LogOutIcon } from "lucide-react";

export default function UserOptions() {
    const navigate = useNavigate();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-animation text-skin-base hover:bg-skin-tertiary rounded-md p-1 outline-none ring-0 focus:outline-none focus:ring-0">
                <div className="bg-animation flex cursor-pointer flex-row items-center space-x-2 rounded-md p-2 hover:bg-gray-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f94f46] text-white">
                        <span className="font-bold leading-none">C</span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
                <DropdownMenuItem
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                >
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
