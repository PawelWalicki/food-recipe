import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MealDetails } from './pages/MealDetails';
import { MealProvider } from './context/MealContext';

function App() {
  return (
    <MealProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal/:mealId" element={<MealDetails />} />
        </Routes>
      </Router>
    </MealProvider>

  );
}

export default App;
