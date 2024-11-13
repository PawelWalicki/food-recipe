import { createContext, useEffect, useState } from "react";

export const MealContext = createContext(null)
export const MealProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [searchInput, setSearchInput] = useState("")
    useEffect(() => {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };


        fetch(url, options)
            .then(res => res.json())
            .then(json => setMeals(json.meals))
            .catch(err => console.error('error:' + err));
    }, [searchInput])
    return (
        <MealContext.Provider value={{ meals, searchInput, setSearchInput }}>
            {children}
        </MealContext.Provider>
    )
}