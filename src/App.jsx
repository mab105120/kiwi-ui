import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home';
import Login from './components/login/Login';


function App() {
  const [user, setUser] = useState({
    user: '',
    isLoggedIn: false,
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={user.isLoggedIn ? <Home user={user} /> : <Login setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </Router>
  )
}

export default App
