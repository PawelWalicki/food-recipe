import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const MealDetails = () => {
    let { mealId } = useParams()
    let [meal, setMeal] = useState({})
    useEffect(() => {

        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };


        fetch(url, options)
            .then(res => res.json())
            .then(json => setMeal(json.meals[0]))
            .catch(err => console.error('error:' + err));
    }, [])
    const generateIngredients = () => {
        const jsx = []
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                jsx.push(
                    <div>
                        <img height={200} src={`https://www.themealdb.com/images/ingredients/${meal[`strIngredient${i}`]}.png`}></img>
                        <div>{meal[`strIngredient${i}`]}: {meal[`strMeasure${i}`]}</div>
                    </div>
                )
            }
            else {
                return jsx
            }
        }
        return jsx
    }

    return (
        <div>
            {generateIngredients()}
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
            <pre>{meal.strInstructions}</pre>
        </div>
    )
}