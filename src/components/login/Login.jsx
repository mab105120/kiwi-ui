import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setUser((prevState) => ({
                ...prevState,
                user: username,
                isLoggedIn: true,
            }));
            navigate('/home');
        } else {
            setUser((prevState) => ({
                ...prevState,
                isLoggedIn: false,
            }));
            toast.error('Login failed! Please make sure your username and password are correct then retry.', {
                autoClose: false,
            });
        }
    }

    return (
        <div className="signin-body">
            <div className='signin-container'>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" id="Email" name="Email" onChange={(event) => setUsername(event.target.value)} ></input>
                    <label>Password</label>
                    <input type="password" id="Password" name="Password" onChange={(event) => setPassword(event.target.value)} ></input>
                    <input type="submit" value="Sign in"></input>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired,
}

export default Login;