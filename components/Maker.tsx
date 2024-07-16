"use client";

import { manufacturers } from "@/contants";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from "@headlessui/react";
import { manufacturerProps } from "@/types";
import React, { useState, Fragment } from "react";
import Image from "next/image";

export default function SearchManufacturer({ maker, setMaker }: manufacturerProps) {
    const [query, setQuery] = useState("");

    const filteredManufacturers =
        query == ""
            ? manufacturers
            : manufacturers.filter((item) =>
                  item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <div className="search-manufacturer">
            <Combobox value={maker} onChange={setMaker}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo" />
                    </ComboboxButton>

                    <ComboboxInput
                        className="search-manufacturer__input"
                        placeholder="volkswagon"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}>
                        <ComboboxOptions>
                            {filteredManufacturers.map((item) => (
                                <ComboboxOption
                                    key={item}
                                    value={item}
                                    className="relative search-manufacturer__option text-gray-900 data-[focus]:bg-primary-blue data-[focus]:text-white">
                                    {item}
                                </ComboboxOption>
                            ))}
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
