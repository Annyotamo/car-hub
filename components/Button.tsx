"use client";

import { buttonProps } from "@/types";

export default function Button({ title, containerSyles, handleClick, type }: buttonProps) {
    return (
        <button
            disabled={false}
            onClick={handleClick}
            className={`custom-btn ${containerSyles}`}
            type={type || "button"}>
            <span className={`flex-1`}>{title}</span>
        </button>
    );
}
