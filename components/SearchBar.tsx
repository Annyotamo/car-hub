"use client";

import { useState } from "react";
import Maker from "./Maker";

export default function SearchBar() {
    const [maker, setMaker] = useState("");

    function handleSearch() {}
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Maker maker={maker} setMaker={setMaker} />
            </div>
        </form>
    );
}
