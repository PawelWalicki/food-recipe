import { Stack } from '@mui/material';
import { SearchBar } from '../components/SearchBar';

export const HomePage = () => {
    return (
        <div>
            <Stack spacing={2} sx={{ marginTop: '30px', justifyContent: "center", alignItems: "center" }}>
                <SearchBar></SearchBar>
            </Stack>

        </div>
    )
}