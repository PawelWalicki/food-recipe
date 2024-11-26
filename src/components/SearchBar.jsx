import { Button, Container, TextField, Grid2 } from "@mui/material"
import { useState } from "react"
import { useMeals } from "../hooks/useMeals"

export const SearchBar = () => {
    const { setSearch } = useMeals()
    const [input, setInput] = useState("")

    const searchMeals = () => {
        setSearch({ value: input, src: "input" })
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
                <Button onClick={() => setSearch({ value: "chicken_breast", src: "button" })} variant="outlined" style={{
                    color: "#000000",
                    backgroundColor: "#a9c100"
                }}>Chicken</Button>
                <Button onClick={() => setSearch({ value: "pork", src: "button" })} variant="outlined" style={{
                    color: "#000000",
                    backgroundColor: "#a9c100"
                }}>Pork</Button>
                <Button onClick={() => setSearch({ value: "beef", src: "button" })} variant="outlined" style={{
                    color: "#000000",
                    backgroundColor: "#a9c100"
                }}>Beef</Button>
                <Button onClick={() => setSearch({ value: "salmon", src: "button" })} variant="outlined" style={{
                    color: "#000000",
                    backgroundColor: "#a9c100"
                }}>Salmon</Button>
            </Grid2>
        </Container>
    )
}

