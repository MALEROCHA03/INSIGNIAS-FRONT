import './App.css';
import Badges from './Bagdes/Badges';
import Outcome from './Outcome/Outcome';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (
    <Router>

    <Routes>
    <Route path='/' element={<Badges/>}/>    
    <Route path='/outcome/:id' element={<Outcome/>}/>    
    </Routes>
   
    </Router>
  );
}

export default App;
