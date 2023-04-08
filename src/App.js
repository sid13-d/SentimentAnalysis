
import './App.css';
import './Home';
import Home from './Home';
import ChartSection from './ChartSection';
import Navbar from './Header/Navbar';
import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartSection />} />
        </Routes>
</Router>
  </div>
  );
}

export default App;
