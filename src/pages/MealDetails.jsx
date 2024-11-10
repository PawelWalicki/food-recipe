import { useParams } from "react-router-dom"

export const MealDetails = () => {
    let {mealId} = useParams()
    return (
        <div>{mealId}</div>
    )
}