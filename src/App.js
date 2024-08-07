import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/slider' element={<Slider />} />
      </Routes>
    </Router>
  );
}

export default App;
