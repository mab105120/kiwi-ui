import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/Navbar.css';
import logo from '../../assets/kiwi-logo.jpg'

const Navbar = ({ onLogout }) => {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="App Logo" className="navbar-logo" />
            </div>
            <div className="navbar-center">
                <Link to="/home" className="navbar-link">Home</Link>
                <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                <Link to="/market" className="navbar-link">Market</Link>
                <Link to="/about" className="navbar-link">About</Link>
            </div>
            <div className="navbar-right">
                <button onClick={onLogout} className="navbar-button">Logout</button>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Navbar;