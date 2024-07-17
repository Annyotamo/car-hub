"use client";

import { buttonProps } from "@/types";
import Image from "next/image";

export default function Button({
    title,
    containerStyles,
    handleClick,
    type,
    textStyles,
    rightIcon,
    isDisabled,
}: buttonProps) {
    return (
        <button
            disabled={false}
            onClick={handleClick}
            className={`custom-btn ${containerStyles}`}
            type={type || "button"}>
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt="Right Icon" fill className="object-contain" />
                </div>
            )}
        </button>
    );
}
