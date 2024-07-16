import { MouseEventHandler } from "react";

export interface buttonProps {
    title: string;
    containerSyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
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
