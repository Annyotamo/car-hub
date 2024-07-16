"use client";

import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchCarData } from "@/utils";
import { carTypes } from "@/types";

export default function Home() {
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await fetchCarData(),
        queryKey: ["cars"],
    });

    // if (!isLoading) console.log(data?.data.map((car: carTypes) => console.log(car.model)));

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
                        <Filter title="Distance" />
                    </div>
                </div>

                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <h2>THESE are the CARs...</h2>
                        <div>
                            {data?.data.map((car: carTypes) => {
                                return (
                                    <div key={car.model}>
                                        {car.make}: {car.model}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
