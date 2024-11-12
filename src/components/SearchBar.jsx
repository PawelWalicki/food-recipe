import { Button, Container, TextField } from "@mui/material"
import { useState } from "react"

export const SearchBar =() => {
    const [input,setInput] = useState("")


    return(
        <Container>
            <TextField onChange={e => setInput(e.target.value)}></TextField>
            <Button>Search</Button>
        </Container>
    )
}