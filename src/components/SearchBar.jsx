import { Button, Container, TextField, Grid2 } from "@mui/material"
import { useState } from "react"
import { useMeals } from "../hooks/useMeals"

export const SearchBar = () => {
    const { setSearchInput, setFilterByIngridient } = useMeals()
    const [input, setInput] = useState("")

    const searchMeals = () => {
        setSearchInput(input)
    }


    return (
        <Container>
            <Grid2 container spacing={2} size="grow" justifyContent="center">
                <TextField onChange={e => setInput(e.target.value)} label="Search for a meal" variant="outlined" sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "#a9c100",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a9c100",
                            borderWidth: "2px",
                        },
                    },
                    "& .MuiInputLabel-outlined": {
                        color: "#a9c100",
                    }
                }}></TextField>
                <Button onClick={() => searchMeals()} variant="outlined" style={{
                    color: "#000000",
                    backgroundColor: "#a9c100"
                }}>Search</Button>
                <button onClick={() => setFilterByIngridient("chicken_breast")}>Chicken</button>
                <button onClick={() => setFilterByIngridient("pork")}>Pork</button>
                <button onClick={() => setFilterByIngridient("beef")}>Beef</button>
                <button onClick={() => setFilterByIngridient("salmon")}>Salmon</button>
            </Grid2>
        </Container>
    )
}

