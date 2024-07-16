"use client";
import Button from "./Button";
import Image from "next/image";
export default function Hero() {
    function handleScroll() {}

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find, Book or Rent a car — Quickly and easily</h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process
                </p>
                <Button
                    title="Explore cars"
                    containerSyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill sizes=" " className="object-contain" />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
}
