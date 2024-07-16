"use client";

import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchCarData } from "@/utils";
import { carTypes } from "@/types";
import CarCard from "@/components/CarCard";

export default function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: async () => await fetchCarData(),
        queryKey: ["cars"],
        retry: 1,
    });

    return (
        <main className="overflow-hidden box-border p-0 m-0">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div>

                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <Filter title="Fuel" />
                        <Filter title="Year" />
                    </div>
                </div>

                {isLoading ? (
                    <div>Loading...</div>
                ) : !isError ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {data?.map((car: carTypes) => (
                                <CarCard car={car} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                        <p>{error.message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
