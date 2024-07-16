import axios from "axios";

export async function fetchCarData() {
    const res = await axios.get("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
        headers: {
            "x-rapidapi-key": "31b2798357mshd9e44f64e4661aap1ddf94jsn90cdb287e35c",
            "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
        },
        params: {
            make: "bmw",
        },
    });
    return res;
}
