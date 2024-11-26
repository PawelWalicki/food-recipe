import { createContext, useEffect, useState } from "react";

export const MealContext = createContext(null)
export const MealProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState({
        value: "",
        src: "input"
    })

    useEffect(() => {

        let url = ""
        if (search.src == "button") {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search.value}`
        } else {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
        }
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                json.meals ? setMeals(json.meals) : setMeals([])
            })
            .catch(err => console.error('error:' + err));
    }, [search])

    return (
        <MealContext.Provider value={{ meals, setSearch }}>
            {children}
        </MealContext.Provider>
    )
}