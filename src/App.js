import './App.css';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
// import Navbar from './components/Navbar/Navbar'
// import Banner from './components/Banner/Banner'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/trailer" element={<VideoPlayer />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
