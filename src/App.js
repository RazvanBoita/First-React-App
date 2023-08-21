import './App.css';
import MainPage from './pages//MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Howitworks from './pages/How-it-Works/howitworks';
import Discover from './pages/Discover/Discover'
import Features from './pages/Features/Features'
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
function App() {
  return (
    <>
    <div className="main-component">
      <Router basename='/football-app-react'>
          <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/discover' element={<Discover/>} />
              <Route path='/features' element={<Features/>} />
              <Route path='/how-it-works' element={<Howitworks/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
