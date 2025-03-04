import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Market from './components/market/Market';

function App() {
  const [user, setUser] = useState({
    user: '',
    isLoggedIn: false,
  });

  const handleLogout = () => {
    setUser({
      user: '',
      isLoggedIn: false,
    });
  };

  return (
    <Router>
      {user.isLoggedIn && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={user.isLoggedIn ? <Home user={user} onLogout={handleLogout} /> : <Login setUser={setUser} />} />
        <Route path="/home" element={user.isLoggedIn ? <Home user={user} onLogout={handleLogout} /> : <Login setUser={setUser} />} />
        <Route path="/about" element={user.isLoggedIn ? <About onLogout={handleLogout} /> : <Login setUser={setUser} />} />
        <Route path="/market" element={user.isLoggedIn ? <Market /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;