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
        const base_url = 'http://127.0.0.1:5000'
        const url = `${base_url}/user/authenticate-user/${username}/${password}`
        fetch(url).then(res => {
            if (!res.ok) {
                setUser((prevState) => ({
                    ...prevState,
                    isLoggedIn: false,
                }));
                toast.error('Login failed! Please make sure your username and password are correct then retry.', {
                    autoClose: false,
                });
            } else {
                res.json().then(data => {
                    setUser((prevState) => ({
                        ...prevState,
                        user: data.username,
                        userId: data.id,
                        isLoggedIn: true,
                    }));
                    navigate('/home');
                })
            }
        }).catch((error) => {
            toast.error(`Failed to authenticate user ${username}: ${error}`)
        })
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