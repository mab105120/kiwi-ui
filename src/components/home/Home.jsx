import PropTypes from "prop-types";

const Home = ({ user }) => {
    return (<>
        <h1>Welcome home {user.user}</h1>
    </>);
}

Home.propTypes = {
    user: PropTypes.object.isRequired
}

export default Home;