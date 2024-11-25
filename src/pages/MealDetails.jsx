import { Grid2, Button, ImageList } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './MealDetails.css'

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
                    <Grid2 size={4}>
                        <div>
                            <img height={200} src={`https://www.themealdb.com/images/ingredients/${meal[`strIngredient${i}`]}.png`}></img>
                            <div>{meal[`strIngredient${i}`]}: {meal[`strMeasure${i}`]}</div>
                        </div>
                    </Grid2>

                )
            }
            else {
                return jsx
            }
        }
        return jsx
    }

    const generateYtLink = (ytLink) => {
        const videoId = ytLink?.split("=")[1]
        const embededLink = "https://www.youtube.com/embed/" + videoId
        return embededLink
    }

    return (
        <div className="mealDetails">
            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    <div>
                        <h1 className="nameMeal">{meal.strMeal}</h1>
                        <img height={400} src={meal.strMealThumb}></img>
                    </div>
                </Grid2>
                <Grid2 size={6}>
                    <div className="ingredientsName">
                        <p className="titleSections">Ingredients</p>
                        <Grid2 container spacing={2}>
                            {generateIngredients()}
                        </Grid2>
                    </div>
                </Grid2>
                <Grid2 size={12}>
                    <iframe src={generateYtLink(meal.strYoutube)} />
                    <p className="titleSections">Instructions</p>
                    <pre style={{
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        padding: "15px",
                        fontSize: "16px",
                        fontFamily: "Roboto Mono",
                        lineHeight: "1.6",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        color: "#333",
                        marginTop: "20px"
                    }}>{meal.strInstructions}</pre>
                </Grid2>
            </Grid2>
            <div className="buttonHome">
                <Link to={"/"}>
                    <Button variant="outlined" style={{
                        color: "#000000",
                        backgroundColor: "#a9c100"
                    }}>Home</Button>
                </Link>
            </div>
        </div >

    )
}