"use client";

import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchCarData } from "@/utils";
import { carTypes } from "@/types";
import CarCard from "@/components/CarCard";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorState from "@/components/ErrorState";
import { fuels, yearsOfProduction } from "@/contants";

export default function Home() {
    const searchParams = useSearchParams();
    const maker = searchParams.get("maker");
    const model = searchParams.get("model");
    const fuel = searchParams.get("fuel");
    const year = searchParams.get("year");
    const limit = searchParams.get("limit");
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryFn: async () =>
            await fetchCarData({
                maker: maker || " ",
                model: model || " ",
                fuel: fuel || " ",
                year: year || "2020",
                limit: limit || "12",
            }),
        queryKey: [searchParams.toString()],
        retry: 1,
    });
    !isLoading && console.log(data);

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
                        <Filter type="fuel" options={fuels} />
                        <Filter type="year" options={yearsOfProduction} />
                    </div>
                </div>

                {isLoading ? (
                    <LoadingSpinner />
                ) : !isError ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {data?.map((car: carTypes, index: number) => (
                                <CarCard car={car} key={index} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <ErrorState />
                )}
            </div>
        </main>
    );
}
