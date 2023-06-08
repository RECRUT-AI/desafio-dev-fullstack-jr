import React from "react";

interface Props {
    size: string;
}

export default function Spinner({ size }: Props) {
    return (
        <div className="relative">
            <div
                className={
                    "absolute rounded-full border-4 border-solid border-skin-base" +
                    ` h-${size} w-${size}`
                }
            ></div>
            <div
                className={
                    "absolute animate-spin rounded-full border-4 border-solid border-skin-tertiary border-t-transparent" +
                    ` h-${size} w-${size}`
                }
            ></div>
        </div>
    );
}
