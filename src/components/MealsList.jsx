import { Container, ImageList } from "@mui/material"
import { useMeals } from "../hooks/useMeals"
import { Link } from "react-router-dom"
import './MealsList.css'

export const MealsList = () => {
    const { meals } = useMeals()
    return (
        <div className="maelasList">
            <Container>
                <ImageList cols={2} >

                        {meals.map(meal => (

                            <Link style={{ textDecoration: 'none' }} key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} height={400}></img>
                                <div className="mealName">{meal.strMeal}</div>
                            </Link>
                        ))}
                    
                </ImageList>
            </Container>
        </div>
    )
} 