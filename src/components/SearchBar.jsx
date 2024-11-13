import { Button, Container, TextField } from "@mui/material"
import { useState } from "react"
import { useMeals } from "../hooks/useMeals"

export const SearchBar = () => {
    const { setSearchInput } = useMeals()
    const [input, setInput] = useState("")

    const searchMeals = () => {
        setSearchInput(input)
    }


    return (
        <Container>
            <TextField onChange={e => setInput(e.target.value)}></TextField>
            <Button onClick={() => searchMeals()}>Search</Button>
        </Container>
    )
}