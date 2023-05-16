import React from 'react';
import './App.css';
import'./pages/about';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './pages/about.js';
import Home from './pages/home';
import News from './pages/news.js';

  
function App() {
return (
    <div className="App">
    <Router>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
  </div>
   
);
}
  
export default App;