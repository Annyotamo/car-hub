import { MouseEventHandler } from "react";

export interface buttonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
    isDisabled?: boolean;
}

export interface manufacturerProps {
    maker: string;
    setMaker: (maker: string) => void;
}

export interface carTypes {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface carDetailsTypes {
    isOpen: boolean;
    closeModal: () => void;
    car: carTypes;
}
