import { createContext, useState } from "react";

export const MealContext = createContext(null)
export const MealProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [searchInput, setSearchInput] = useState("")
    useEffect(() => {

        const url = `www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };


        fetch(url, options)
            .then(res => res.json())
            .then(json => setMeals(json.results))
            .catch(err => console.error('error:' + err));
        console.log("Looking for ", searchInput)
    }, [searchInput])
    return (
        <MealContext.Provider value={{ meals, searchInput, setSearchInput }}>
            {children}
        </MealContext.Provider>
    )
}