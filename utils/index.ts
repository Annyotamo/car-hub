import axios from "axios";

export async function fetchCarData() {
    try {
        const res = await axios.get("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
            headers: {
                "x-rapidapi-key": "31b2798357mshd9e44f64e4661aap1ddf94jsn90cdb287e35c",
                "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
            },
            params: {
                make: "bmw",
            },
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
