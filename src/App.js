import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MealDetails } from './pages/MealDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/meal/:mealId" element={<MealDetails/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
