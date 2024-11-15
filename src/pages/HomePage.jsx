import { Stack } from '@mui/material';
import { SearchBar } from '../components/SearchBar';
import { MealsList } from '../components/MealsList';

export const HomePage = () => {
    return (
        <div>
            <Stack spacing={2} sx={{ marginTop: '30px', justifyContent: "center", alignItems: "center" }}>
                <SearchBar></SearchBar>
                <MealsList></MealsList>
            </Stack>

        </div>
    )
}