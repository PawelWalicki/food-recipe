import { ImageList } from "@mui/material"
import { useMeals } from "../hooks/useMeals"
import { Link } from "react-router-dom"

export const MealsList = () => {
    const { meals } = useMeals()
    return (
        <div>

            <ImageList>
                <div>
                    {meals.map(meal => (

                        <Link style={{ textDecoration: 'none' }} key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
                            <img src={meal.strMealThumb} height={400}></img>
                            <div>{meal.strMeal}</div>
                        </Link>

                    ))}
                </div>
            </ImageList>
        </div>
    )
} 