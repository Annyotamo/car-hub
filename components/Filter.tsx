"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { filterTypes } from "@/types";

export default function Filter({ type, options }: filterTypes) {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();

    function handleUpdateParams(value: string) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete(type);
        searchParams.set(type, value.toLowerCase());
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathName, { scroll: false });
    }

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams(e.value);
                }}>
                <div className="relative w-fit z-10">
                    <ListboxButton className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src="/chevron-up-down.svg"
                            width={20}
                            height={20}
                            className="ml-4 object-contain"
                            alt="up down arrow"
                        />
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <ListboxOptions className="custom-filter__options">
                            {options.map((option) => (
                                <ListboxOption
                                    key={option.title}
                                    className="relative cursor-default select-none py-2 px-4 data-[focus]:bg-primary-blue data-[focus]:text-white"
                                    value={option}>
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected ? "font-medium" : "font-normal"
                                                }`}>
                                                {option.title}
                                            </span>
                                        </>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
