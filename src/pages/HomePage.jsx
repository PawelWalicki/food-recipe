import { Stack } from '@mui/material';
import { SearchBar } from '../components/SearchBar';
import { MealsList } from '../components/MealsList';
import { Footer } from '../components/Footer';

export const HomePage = () => {
    return (
        <div className='homePage'>
            <Stack spacing={2} sx={{ marginTop: '30px', justifyContent: "center", alignItems: "center" }}>
                <SearchBar></SearchBar>
                <MealsList></MealsList>
                <Footer></Footer>
            </Stack>

        </div>
    )
}