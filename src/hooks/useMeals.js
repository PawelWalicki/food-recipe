import { useContext } from "react"
import { MealContext } from "../context/MealContext"

export const useMeals = () => {
    const mealsCtx = useContext(MealContext)

    if (!mealsCtx) {
        throw new Error("No movies found")
    }
    return mealsCtx
}