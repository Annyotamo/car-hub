"use client";

import { useState } from "react";
import Maker from "./Maker";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const [maker, setMaker] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (maker === "" && model === "") {
            alert("Please fill in the search bar...");
            return;
        }
        updateSearchParams(maker.toLowerCase(), model.toLowerCase());
    }

    function updateSearchParams(maker: string, model: string) {
        const searchParams = new URLSearchParams(window.location.search);

        // Clear existing parameters to avoid repetition
        searchParams.delete("maker");
        searchParams.delete("model");

        if (maker) {
            searchParams.set("maker", maker);
        }

        if (model) {
            searchParams.set("model", model);
        }

        const newPathName = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathName, { scroll: false });
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Maker maker={maker} setMaker={setMaker} />
                <SearchButton classes="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    alt="car model"
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input
                    type="text"
                    name={model}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton classes="sm:hidden" />
            </div>
            <SearchButton classes="max-sm:hidden" />
        </form>
    );
}
