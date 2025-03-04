import '../../styles/About.css';
import Author from '../about/Author';
import User from '../../assets/mab105120.png';

const About = ({ onLogout }) => {
    return (<>
        <div className="about-container">
            <h1>About us</h1>
            <Author authorImg={User} authorBio={"Hello I am an author 1"} />
            <Author authorImg={User} authorBio={"Hello I am an author 2"} />
            <Author authorImg={User} authorBio={"Hello I am an author 3"} />
        </div>

    </>)
}

export default About