import PropTypes from 'prop-types';

import '../../styles/Author.css';

const Author = ({ authorImg, authorBio }) => {
    return (<>
        <div className="author-container">
            <img src={authorImg} className="user-img"></img>
            <p>{authorBio}</p>
        </div>
    </>)
}

Author.propType = {
    authorBio: PropTypes.string.isRequired,
    authorImg: PropTypes.img,
}

export default Author;